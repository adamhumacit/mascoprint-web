#!/usr/bin/env bash
set -euo pipefail

# Deploy the latest version of mascoprint-web
# Usage: ./scripts/deploy.sh

APP_DIR="$(cd "$(dirname "$0")/.." && pwd)"
COMPOSE="docker compose"
SERVICE="mascoprint-web"
HEALTH_URL="http://localhost:3000"
MAX_WAIT=60

# Use docker-compose if docker compose (v2 plugin) isn't available
if ! docker compose version &>/dev/null; then
  COMPOSE="docker-compose"
fi

log() { printf "\033[1;34m==>\033[0m %s\n" "$*"; }
err() { printf "\033[1;31m==>\033[0m %s\n" "$*" >&2; }

cd "$APP_DIR"

# --- Pull latest code ---
log "Pulling latest changes from origin…"
git pull --ff-only origin main

# --- Check for new env vars ---
if [ -f .env.example ] && [ -f .env ]; then
  missing=$(diff <(grep -oP '^[A-Z_]+' .env.example | sort) \
                 <(grep -oP '^[A-Z_]+' .env | sort) \
            | grep '^<' | sed 's/^< //' || true)
  if [ -n "$missing" ]; then
    err "New env vars found in .env.example that are missing from .env:"
    echo "$missing"
    err "Add them to .env before deploying."
    exit 1
  fi
fi

# --- Build and swap container (no downtime) ---
log "Building new image and replacing container…"
$COMPOSE up -d --build --force-recreate

# --- Health check ---
log "Waiting for health check at $HEALTH_URL…"
elapsed=0
while [ $elapsed -lt $MAX_WAIT ]; do
  if curl -sf --max-time 5 "$HEALTH_URL" >/dev/null 2>&1; then
    log "Deploy complete — site is live."
    $COMPOSE ps
    exit 0
  fi
  sleep 3
  elapsed=$((elapsed + 3))
done

err "Health check failed after ${MAX_WAIT}s. Check logs:"
$COMPOSE logs --tail 50 "$SERVICE"
exit 1
