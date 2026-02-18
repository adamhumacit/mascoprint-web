# Phase 5: Deployment & Infrastructure

## Overview

Set up Docker containerization, configure VPS deployment, set up nginx as a reverse proxy, configure SSL with Let's Encrypt, and establish monitoring and backup procedures.

## Step 1: Docker Configuration

**Dockerfile** - [Dockerfile](../Dockerfile):

```dockerfile
# syntax=docker/dockerfile:1

# Stage 1: Dependencies
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# Stage 2: Builder
FROM node:20-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Set environment variables for build
ENV NEXT_TELEMETRY_DISABLED 1

# Build the application
RUN npm run build

# Stage 3: Runner
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy necessary files
COPY --from=builder /app/public ./public

# Set correct permissions for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

**Update next.config.js for standalone output**:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... other config
  output: 'standalone', // Required for Docker
}
```

**docker-compose.yml** - [docker-compose.yml](../docker-compose.yml):

```yaml
version: '3.8'

services:
  mascoprint-web:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: mascoprint-web
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - NEXT_PUBLIC_SITE_URL=${NEXT_PUBLIC_SITE_URL}
      - NEXT_PUBLIC_GA_ID=${NEXT_PUBLIC_GA_ID}
      - CONTACT_EMAIL_TO=${CONTACT_EMAIL_TO}
      - SMTP_HOST=${SMTP_HOST}
      - SMTP_PORT=${SMTP_PORT}
      - SMTP_USER=${SMTP_USER}
      - SMTP_PASS=${SMTP_PASS}
    restart: unless-stopped
    networks:
      - mascoprint-network
    healthcheck:
      test: ["CMD", "node", "-e", "require('http').get('http://localhost:3000', (r) => process.exit(r.statusCode === 200 ? 0 : 1))"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s

networks:
  mascoprint-network:
    driver: bridge
```

**.dockerignore**:

```
# Dependencies
node_modules
npm-debug.log
yarn-error.log

# Next.js
.next
out

# Environment
.env*.local
.env

# Git
.git
.gitignore

# IDE
.vscode
.idea

# Documentation
README.md
docs

# Testing
coverage
.nyc_output

# Misc
.DS_Store
*.pem
```

## Step 2: VPS Setup

### Initial Server Setup

**Connect to VPS**:
```bash
ssh root@your-server-ip
```

**Update system**:
```bash
apt update && apt upgrade -y
```

**Install required packages**:
```bash
apt install -y curl git nginx certbot python3-certbot-nginx
```

**Install Docker**:
```bash
# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

# Install Docker Compose
apt install -y docker-compose-plugin

# Enable Docker to start on boot
systemctl enable docker
systemctl start docker
```

**Create deployment user**:
```bash
adduser deploy
usermod -aG docker deploy
usermod -aG sudo deploy
```

**Setup SSH for deploy user**:
```bash
# As root
mkdir -p /home/deploy/.ssh
cp ~/.ssh/authorized_keys /home/deploy/.ssh/
chown -R deploy:deploy /home/deploy/.ssh
chmod 700 /home/deploy/.ssh
chmod 600 /home/deploy/.ssh/authorized_keys
```

## Step 3: Nginx Configuration

**Create nginx configuration** - `/etc/nginx/sites-available/mascoprint`:

```nginx
# Redirect www to non-www
server {
    listen 80;
    listen [::]:80;
    server_name www.mascoprint.co.uk;
    return 301 $scheme://mascoprint.co.uk$request_uri;
}

# Main server block
server {
    listen 80;
    listen [::]:80;
    server_name mascoprint.co.uk;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;

    # Logging
    access_log /var/log/nginx/mascoprint_access.log;
    error_log /var/log/nginx/mascoprint_error.log;

    # Let's Encrypt ACME challenge
    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
        allow all;
    }

    # Proxy to Next.js
    location / {
        proxy_pass http://mascoprint-web:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;

        # Timeouts
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }

    # Next.js static files
    location /_next/static {
        proxy_pass http://mascoprint-web:3000;
        proxy_cache_valid 60m;
        add_header Cache-Control "public, max-age=3600, immutable";
    }

    # Public static files
    location /images {
        proxy_pass http://mascoprint-web:3000;
        proxy_cache_valid 60m;
        add_header Cache-Control "public, max-age=3600";
    }

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types text/plain text/css text/xml text/javascript application/json application/javascript application/xml+rss application/rss+xml font/truetype font/opentype application/vnd.ms-fontobject image/svg+xml;
}
```

**Enable site**:
```bash
ln -s /etc/nginx/sites-available/mascoprint /etc/nginx/sites-enabled/
nginx -t
systemctl restart nginx
```

## Step 4: SSL Configuration

**Install SSL certificate with Certbot**:

```bash
# Install certificate
certbot --nginx -d mascoprint.co.uk -d www.mascoprint.co.uk

# Follow prompts:
# - Enter email address
# - Agree to terms
# - Choose whether to redirect HTTP to HTTPS (recommended: yes)
```

**Test auto-renewal**:
```bash
certbot renew --dry-run
```

**Auto-renewal is automatically configured via systemd timer**:
```bash
systemctl status certbot.timer
```

After SSL installation, nginx config will be updated automatically. The final config will look like:

```nginx
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name mascoprint.co.uk;

    ssl_certificate /etc/letsencrypt/live/mascoprint.co.uk/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/mascoprint.co.uk/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    # ... rest of configuration
}

# Redirect HTTP to HTTPS
server {
    listen 80;
    listen [::]:80;
    server_name mascoprint.co.uk www.mascoprint.co.uk;

    # Let's Encrypt ACME challenge (must be before redirect)
    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
        allow all;
    }

    location / {
        return 301 https://mascoprint.co.uk$request_uri;
    }
}
```

## Step 5: Deployment Process

**Create deployment directory**:
```bash
# As deploy user
mkdir -p /home/deploy/mascoprint-web
cd /home/deploy/mascoprint-web
```

**Clone repository** (or upload files):
```bash
git clone <your-repo-url> .
```

**Create production environment file** - `.env.production`:
```bash
# Create .env file with production values
cat > .env.production << EOF
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://mascoprint.co.uk
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
CONTACT_EMAIL_TO=office@mascoprint.co.uk
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-smtp-user
SMTP_PASS=your-smtp-password
EOF

# Secure the file
chmod 600 .env.production
```

**Build and run**:
```bash
# Build Docker image
docker compose build

# Start container
docker compose up -d

# Check logs
docker compose logs -f

# Check status
docker compose ps
```

## Step 6: Deployment Scripts

**Create deployment script** - [scripts/deploy.sh](../scripts/deploy.sh):

```bash
#!/bin/bash

set -e

echo "🚀 Starting deployment..."

# Pull latest code
echo "📥 Pulling latest code..."
git pull origin main

# Build new image
echo "🔨 Building Docker image..."
docker compose build

# Stop old container
echo "🛑 Stopping old container..."
docker compose down

# Start new container
echo "▶️  Starting new container..."
docker compose up -d

# Wait for health check
echo "🏥 Waiting for health check..."
sleep 10

# Check if container is running
if docker compose ps | grep -q "Up"; then
    echo "✅ Deployment successful!"

    # Clean up old images
    echo "🧹 Cleaning up old images..."
    docker image prune -f
else
    echo "❌ Deployment failed!"
    docker compose logs
    exit 1
fi

echo "🎉 Deployment complete!"
```

**Make executable**:
```bash
chmod +x scripts/deploy.sh
```

## Step 7: Monitoring & Maintenance

**Docker logs**:
```bash
# View logs
docker compose logs -f

# View last 100 lines
docker compose logs --tail=100

# View logs for specific service
docker compose logs mascoprint-web
```

**Container management**:
```bash
# Restart container
docker compose restart

# Stop container
docker compose down

# Start container
docker compose up -d

# Rebuild and restart
docker compose up -d --build
```

**System monitoring**:
```bash
# Check disk usage
df -h

# Check memory
free -m

# Check Docker stats
docker stats

# Check nginx status
systemctl status nginx

# Check nginx logs
tail -f /var/log/nginx/mascoprint_access.log
tail -f /var/log/nginx/mascoprint_error.log
```

## Step 8: Backup Strategy

**Create backup script** - `/home/deploy/backup.sh`:

```bash
#!/bin/bash

BACKUP_DIR="/home/deploy/backups"
DATE=$(date +%Y%m%d_%H%M%S)
APP_DIR="/home/deploy/mascoprint-web"

# Create backup directory
mkdir -p $BACKUP_DIR

# Backup application files
tar -czf $BACKUP_DIR/app_$DATE.tar.gz -C $APP_DIR .

# Backup environment files
cp $APP_DIR/.env.production $BACKUP_DIR/env_$DATE.txt

# Keep only last 7 backups
find $BACKUP_DIR -name "app_*.tar.gz" -mtime +7 -delete
find $BACKUP_DIR -name "env_*.txt" -mtime +7 -delete

echo "Backup completed: $DATE"
```

**Schedule with cron**:
```bash
# Edit crontab
crontab -e

# Add daily backup at 2 AM
0 2 * * * /home/deploy/backup.sh >> /home/deploy/backup.log 2>&1
```

## Step 9: Firewall Configuration

**Setup UFW (Uncomplicated Firewall)**:
```bash
# Install UFW (if not installed)
apt install -y ufw

# Allow SSH
ufw allow OpenSSH

# Allow HTTP and HTTPS
ufw allow 80/tcp
ufw allow 443/tcp

# Enable firewall
ufw enable

# Check status
ufw status
```

## Step 10: Performance Monitoring

**Setup simple uptime monitoring**:

Create a monitoring script - `/home/deploy/monitor.sh`:

```bash
#!/bin/bash

URL="https://mascoprint.co.uk"
EMAIL="office@mascoprint.co.uk"

if ! curl -f -s -o /dev/null $URL; then
    echo "Website is down!" | mail -s "Mascoprint Website Alert" $EMAIL

    # Attempt automatic restart
    cd /home/deploy/mascoprint-web
    docker compose restart
fi
```

**Schedule with cron** (every 5 minutes):
```bash
*/5 * * * * /home/deploy/monitor.sh
```

## Checklist

- [ ] Dockerfile created and tested locally
- [ ] docker-compose.yml configured
- [ ] VPS server provisioned and accessible
- [ ] Docker installed on VPS
- [ ] Deploy user created with proper permissions
- [ ] Nginx installed and configured
- [ ] Nginx configuration tested (`nginx -t`)
- [ ] SSL certificate installed with Certbot
- [ ] Production environment variables set
- [ ] Application deployed and running
- [ ] HTTPS working correctly
- [ ] DNS records pointing to VPS
- [ ] Firewall configured
- [ ] Backup script created and scheduled
- [ ] Monitoring setup
- [ ] Deployment script tested

## Testing Checklist

### Local Testing
- [ ] `docker build` succeeds
- [ ] `docker compose up` works locally
- [ ] All pages accessible
- [ ] Contact form sends emails
- [ ] Images load correctly

### Production Testing
- [ ] Website accessible at https://mascoprint.co.uk
- [ ] SSL certificate valid
- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Contact form works
- [ ] News articles load
- [ ] Mobile responsive design
- [ ] Performance (Lighthouse > 90)
- [ ] SEO metadata present
- [ ] Sitemap accessible
- [ ] Google Analytics tracking

## Deployment Workflow

1. **Develop locally**
2. **Test thoroughly**
3. **Commit changes to git**
4. **Push to repository**
5. **SSH to VPS**
6. **Run deployment script**:
   ```bash
   cd /home/deploy/mascoprint-web
   ./scripts/deploy.sh
   ```
7. **Verify deployment**
8. **Monitor logs for any issues**

## Troubleshooting

**Container won't start**:
```bash
docker compose logs
docker compose ps
```

**Nginx errors**:
```bash
nginx -t
tail -f /var/log/nginx/error.log
```

**SSL issues**:
```bash
certbot certificates
certbot renew --dry-run
```

**Site not accessible**:
- Check DNS records
- Check firewall rules
- Check nginx status
- Check Docker container status

## Security Best Practices

- [ ] Keep system packages updated
- [ ] Regularly update Docker images
- [ ] Use strong passwords
- [ ] Disable root SSH login
- [ ] Enable SSH key authentication only
- [ ] Keep SSL certificates renewed
- [ ] Regular security audits
- [ ] Monitor access logs
- [ ] Use environment variables for secrets
- [ ] Never commit secrets to git

## Next Steps

- **Go Live**: Update DNS to point to VPS
- **Monitor**: Check logs and performance
- **Optimize**: Use Lighthouse and fix any issues
- **Iterate**: Add new features and content as needed

## Success! 🎉

Your Mascoprint website is now deployed and ready for production use!
