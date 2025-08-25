FROM node:22.18.0-trixie-slim@sha256:d02467efc049791a7586a20e36d9219d184ab89e45b19c57e88cff322678c233 AS deps
WORKDIR /app

COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci --frozen-lockfile --legacy-peer-deps --ignore-scripts

# Rebuild the source code only when needed
FROM node:22.18.0-trixie-slim@sha256:d02467efc049791a7586a20e36d9219d184ab89e45b19c57e88cff322678c233 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

FROM nginxinc/nginx-unprivileged:alpine@sha256:69e8821ff71771c12686bfd1a3f74b92c02f53ea422e1378d26fc7bb29044cf2 AS runner
USER root
RUN apk --no-cache upgrade

# Image should be created with a non-root user. More details:
# https://hub.docker.com/r/nginxinc/nginx-unprivileged
USER nginx

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist/blog /usr/share/nginx/html