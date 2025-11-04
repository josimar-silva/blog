FROM node:24.11.0-trixie-slim@sha256:a7dc5312b263c86d88b02f0665f0f4516292e3490601d3def196f6d4b8aa3f06 AS deps
WORKDIR /app

COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci --frozen-lockfile --legacy-peer-deps --ignore-scripts

# Rebuild the source code only when needed
FROM node:24.11.0-trixie-slim@sha256:a7dc5312b263c86d88b02f0665f0f4516292e3490601d3def196f6d4b8aa3f06 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

FROM nginxinc/nginx-unprivileged:alpine@sha256:fb089229c0b27470aef1384985c4f073c19f6e1529a9cfc9676cf7d9869a36f4 AS runner
USER root
RUN apk --no-cache upgrade

# Image should be created with a non-root user. More details:
# https://hub.docker.com/r/nginxinc/nginx-unprivileged
USER nginx

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist/blog /usr/share/nginx/html