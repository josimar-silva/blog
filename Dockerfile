FROM node:24.10.0-trixie-slim@sha256:4fd2d8b0c63882882529a56bcc977732c059e0d03a977eb20d504d9a1d6591a0 AS deps
WORKDIR /app

COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci --frozen-lockfile --legacy-peer-deps --ignore-scripts

# Rebuild the source code only when needed
FROM node:24.10.0-trixie-slim@sha256:4fd2d8b0c63882882529a56bcc977732c059e0d03a977eb20d504d9a1d6591a0 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

FROM nginxinc/nginx-unprivileged:alpine@sha256:80606e030e8a47635ab303bb9cf8cac1988b1f71cea462c980544b3096e68564 AS runner
USER root
RUN apk --no-cache upgrade

# Image should be created with a non-root user. More details:
# https://hub.docker.com/r/nginxinc/nginx-unprivileged
USER nginx

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist/blog /usr/share/nginx/html