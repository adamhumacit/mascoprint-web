# VPS Quick Start Guide

Quick reference for deploying Mascoprint website to a fresh VPS.

## Prerequisites Checklist

- [ ] VPS with Ubuntu 22.04 LTS
- [ ] Root SSH access
- [ ] Domain DNS configured to point to VPS IP
- [ ] Git repository accessible

## One-Command Setup (Advanced Users)

Save this as `setup.sh` and run with `bash setup.sh`:

```bash
#!/bin/bash

# Update system
sudo apt update && sudo apt upgrade -y

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Install Nginx
sudo apt install -y nginx

# Install Certbot
sudo apt install -y certbot python3-certbot-nginx

# Configure firewall
sudo ufw allow OpenSSH
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw --force enable

echo "Setup complete! Please log out and back in for Docker group changes."
```

## Step-by-Step Quick Start

### 1. Initial Server Setup (5 minutes)

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Docker
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker $USER

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Log out and back in
exit
```

### 2. Deploy Application (3 minutes)

```bash
# Clone repository
git clone <your-repo-url> ~/mascoprint-web
cd ~/mascoprint-web

# Build and start
docker-compose up -d

# Verify
docker ps
curl http://localhost:3000
```

### 3. Configure Nginx (2 minutes)

```bash
# Install Nginx
sudo apt install -y nginx

# Create config
sudo nano /etc/nginx/sites-available/mascoprint
```

Paste this minimal config:

```nginx
server {
    listen 80;
    server_name mascoprint.co.uk www.mascoprint.co.uk;

    # Let's Encrypt ACME challenge
    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
        allow all;
    }

    location / {
        proxy_pass http://mascoprint-web:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

```bash
# Enable site
sudo ln -s /etc/nginx/sites-available/mascoprint /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl restart nginx
```

### 4. Setup SSL (2 minutes)

```bash
# Install Certbot
sudo apt install -y certbot python3-certbot-nginx

# Get certificate
sudo certbot --nginx -d mascoprint.co.uk -d www.mascoprint.co.uk

# Follow prompts, choose redirect HTTP->HTTPS
```

### 5. Configure Firewall (1 minute)

```bash
sudo ufw allow OpenSSH
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
```

## Verification

Test everything is working:

```bash
# Check Docker container
docker ps | grep mascoprint

# Check Nginx
sudo systemctl status nginx

# Test HTTPS (from your local machine)
curl -I https://mascoprint.co.uk

# Check SSL certificate
sudo certbot certificates
```

## Common Commands

### Update Website

```bash
cd ~/mascoprint-web
git pull
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

### View Logs

```bash
# Application logs
docker-compose logs -f

# Nginx logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

### Restart Services

```bash
# Restart Docker container
docker-compose restart

# Restart Nginx
sudo systemctl restart nginx
```

## DNS Configuration

Before deployment, ensure your DNS is configured:

### At Your DNS Provider (e.g., Cloudflare, Namecheap)

```
Type    Name    Value           TTL
A       @       <VPS-IP>        Auto
A       www     <VPS-IP>        Auto
```

Allow 10-30 minutes for DNS propagation.

## Security Checklist

After deployment:

- [ ] Firewall configured (ufw enabled)
- [ ] SSL certificate installed
- [ ] HTTP redirects to HTTPS
- [ ] SSH key-only authentication enabled
- [ ] Root login disabled
- [ ] Automatic security updates enabled
- [ ] Regular backups scheduled

## Performance Optimization

Optional improvements:

```bash
# Enable Nginx caching
# Add to nginx config:
proxy_cache_valid 200 1h;
proxy_cache_bypass $http_cache_control;

# Enable gzip compression
# Already enabled by default in Nginx

# Monitor resource usage
htop
docker stats
```

## Troubleshooting

**Site not accessible**: Check DNS propagation with `dig mascoprint.co.uk`

**Docker container stops**: Check logs with `docker-compose logs`

**Nginx 502 error**: Ensure Docker container is running on port 3000

**SSL certificate error**: Verify DNS points to VPS before running certbot

---

**Total Setup Time**: ~15 minutes
**Difficulty**: Intermediate

For detailed explanations, see [DEPLOYMENT.md](./DEPLOYMENT.md)
