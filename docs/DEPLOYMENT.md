# Mascoprint Website - Deployment Guide

This guide covers deploying the Mascoprint Next.js website to a VPS using Docker.

## Prerequisites

- VPS with Ubuntu 22.04 LTS or later
- Root or sudo access to VPS
- Domain name configured (mascoprint.co.uk)
- Git installed locally

## Table of Contents

1. [VPS Initial Setup](#vps-initial-setup)
2. [Docker Installation](#docker-installation)
3. [Project Deployment](#project-deployment)
4. [Nginx Setup](#nginx-setup)
5. [SSL Configuration](#ssl-configuration)
6. [Monitoring & Maintenance](#monitoring--maintenance)

---

## VPS Initial Setup

### 1. Connect to VPS

```bash
ssh root@your-vps-ip
```

### 2. Create a New User (Security Best Practice)

```bash
# Create user
adduser mascoprint

# Add to sudo group
usermod -aG sudo mascoprint

# Switch to new user
su - mascoprint
```

### 3. Configure Firewall

```bash
# Allow SSH
sudo ufw allow OpenSSH

# Allow HTTP and HTTPS
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp

# Enable firewall
sudo ufw enable

# Check status
sudo ufw status
```

---

## Docker Installation

### 1. Install Docker

```bash
# Update packages
sudo apt update
sudo apt upgrade -y

# Install dependencies
sudo apt install -y apt-transport-https ca-certificates curl software-properties-common

# Add Docker's official GPG key
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# Add Docker repository
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Install Docker
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io

# Add user to docker group
sudo usermod -aG docker ${USER}

# Log out and back in for group changes to take effect
exit
su - mascoprint
```

### 2. Install Docker Compose

```bash
# Download Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

# Make executable
sudo chmod +x /usr/local/bin/docker-compose

# Verify installation
docker --version
docker-compose --version
```

---

## Project Deployment

### 1. Clone Repository

```bash
# Create project directory
mkdir -p ~/projects
cd ~/projects

# Clone the repository (replace with your repo URL)
git clone <your-repository-url> mascoprint-web
cd mascoprint-web
```

### 2. Build and Run Docker Container

```bash
# Build the Docker image
docker-compose build

# Start the container
docker-compose up -d

# Check if container is running
docker ps

# View logs
docker-compose logs -f
```

### 3. Test the Application

```bash
# Test locally on the VPS
curl http://localhost:3000

# You should see the HTML output of the home page
```

---

## Nginx Setup

### 1. Install Nginx

```bash
sudo apt install -y nginx
```

### 2. Create Nginx Configuration

```bash
# Create new site configuration
sudo nano /etc/nginx/sites-available/mascoprint
```

Add the following configuration:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name mascoprint.co.uk www.mascoprint.co.uk;

    # Redirect to HTTPS (will be configured later)
    # return 301 https://$server_name$request_uri;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
}
```

### 3. Enable the Site

```bash
# Create symbolic link
sudo ln -s /etc/nginx/sites-available/mascoprint /etc/nginx/sites-enabled/

# Remove default site
sudo rm /etc/nginx/sites-enabled/default

# Test Nginx configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx

# Enable Nginx to start on boot
sudo systemctl enable nginx
```

---

## SSL Configuration

### 1. Install Certbot

```bash
sudo apt install -y certbot python3-certbot-nginx
```

### 2. Obtain SSL Certificate

```bash
# Get certificate for your domain
sudo certbot --nginx -d mascoprint.co.uk -d www.mascoprint.co.uk

# Follow the prompts:
# - Enter email address for renewal notifications
# - Agree to terms of service
# - Choose whether to redirect HTTP to HTTPS (recommended: Yes)
```

### 3. Test SSL Renewal

```bash
# Dry run renewal
sudo certbot renew --dry-run

# Certbot will automatically renew certificates before expiry
```

### 4. Updated Nginx Config (After SSL)

The Nginx config will be automatically updated by Certbot. Verify it looks similar to:

```nginx
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name mascoprint.co.uk www.mascoprint.co.uk;

    ssl_certificate /etc/letsencrypt/live/mascoprint.co.uk/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/mascoprint.co.uk/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    location / {
        proxy_pass http://localhost:3000;
        # ... rest of proxy config
    }
}

server {
    listen 80;
    listen [::]:80;
    server_name mascoprint.co.uk www.mascoprint.co.uk;
    return 301 https://$server_name$request_uri;
}
```

---

## Monitoring & Maintenance

### Update the Application

```bash
cd ~/projects/mascoprint-web

# Pull latest changes
git pull origin main

# Rebuild and restart containers
docker-compose down
docker-compose build --no-cache
docker-compose up -d

# Verify
docker-compose logs -f
```

### Check Application Status

```bash
# View running containers
docker ps

# Check container logs
docker-compose logs -f mascoprint-web

# Check Nginx status
sudo systemctl status nginx

# View Nginx logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

### Backup

```bash
# Backup Nginx configuration
sudo cp -r /etc/nginx/sites-available /home/mascoprint/backups/nginx-$(date +%Y%m%d)

# Backup SSL certificates
sudo cp -r /etc/letsencrypt /home/mascoprint/backups/letsencrypt-$(date +%Y%m%d)
```

### Security Updates

```bash
# Regular system updates
sudo apt update
sudo apt upgrade -y

# Update Docker images
cd ~/projects/mascoprint-web
docker-compose pull
docker-compose up -d
```

---

## Troubleshooting

### Container Won't Start

```bash
# Check logs
docker-compose logs mascoprint-web

# Restart container
docker-compose restart

# Rebuild if needed
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

### Nginx Errors

```bash
# Test configuration
sudo nginx -t

# Check error logs
sudo tail -f /var/log/nginx/error.log

# Restart Nginx
sudo systemctl restart nginx
```

### SSL Certificate Issues

```bash
# Renew manually
sudo certbot renew --force-renewal

# Check certificate expiry
sudo certbot certificates
```

---

## Additional Resources

- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [Docker Documentation](https://docs.docker.com/)
- [Nginx Documentation](https://nginx.org/en/docs/)
- [Let's Encrypt Documentation](https://letsencrypt.org/docs/)

---

**Deployed**: TBD
**Last Updated**: 2026-02-16
