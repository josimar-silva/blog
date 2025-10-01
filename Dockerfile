FROM node:22.20.0-trixie-slim@sha256:56ef5d0bb800d322889c771b3414f12a537f16c1d8da7f402f70d53a115e2bf9 AS deps
WORKDIR /app

COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci --frozen-lockfile --legacy-peer-deps --ignore-scripts

# Rebuild the source code only when needed
FROM node:22.20.0-trixie-slim@sha256:56ef5d0bb800d322889c771b3414f12a537f16c1d8da7f402f70d53a115e2bf9 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

FROM nginxinc/nginx-unprivileged:alpine@sha256:2bae49de8b7394f1ef4b6ddc5d8a6d07467d82883d20fb54556ce90b445870f9 AS runner
USER root
RUN apk --no-cache upgrade

# Image should be created with a non-root user. More details:
# https://hub.docker.com/r/nginxinc/nginx-unprivileged
USER nginx

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist/blog /usr/share/nginx/html