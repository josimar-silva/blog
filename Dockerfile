FROM node:24.12.0-trixie-slim@sha256:040d57fbb7c3d3d21080c52c23bb1bbfb0cb2a5c7d60b59c86de0eded087bbb1 AS deps
WORKDIR /app

COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci --frozen-lockfile --legacy-peer-deps --ignore-scripts

# Rebuild the source code only when needed
FROM node:24.12.0-trixie-slim@sha256:040d57fbb7c3d3d21080c52c23bb1bbfb0cb2a5c7d60b59c86de0eded087bbb1 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

FROM nginxinc/nginx-unprivileged:alpine@sha256:c2351965a68a252c32e0c03a5a7b2144087df078de199a3a67d35d41a41f4760 AS runner
USER root
RUN apk --no-cache upgrade

# Image should be created with a non-root user. More details:
# https://hub.docker.com/r/nginxinc/nginx-unprivileged
USER nginx

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist/blog /usr/share/nginx/html