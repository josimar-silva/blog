FROM node:22.20.0-trixie-slim@sha256:c7a6d80f9d76726291228f8878cd844cb15fcbdd2a4d54591e7d2b1903efb4e1 AS deps
WORKDIR /app

COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci --frozen-lockfile --legacy-peer-deps --ignore-scripts

# Rebuild the source code only when needed
FROM node:22.20.0-trixie-slim@sha256:c7a6d80f9d76726291228f8878cd844cb15fcbdd2a4d54591e7d2b1903efb4e1 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

FROM nginxinc/nginx-unprivileged:alpine@sha256:7fe7fa7c0bda4c3cb0b7367eaad6a01db52226bce370eeb917664f7135c23b46 AS runner
USER root
RUN apk --no-cache upgrade

# Image should be created with a non-root user. More details:
# https://hub.docker.com/r/nginxinc/nginx-unprivileged
USER nginx

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist/blog /usr/share/nginx/html