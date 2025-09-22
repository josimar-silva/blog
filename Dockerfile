FROM node:22.19.0-trixie-slim@sha256:a174cf99ada4707fb5a81a9233af04db83911c68b6bf58199f956fbdf8389926 AS deps
WORKDIR /app

COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci --frozen-lockfile --legacy-peer-deps --ignore-scripts

# Rebuild the source code only when needed
FROM node:22.19.0-trixie-slim@sha256:a174cf99ada4707fb5a81a9233af04db83911c68b6bf58199f956fbdf8389926 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

FROM nginxinc/nginx-unprivileged:alpine@sha256:9fda08cc7f7580567e9d8c477420d7beadb9387d4004074c89f41f9d90ecf300 AS runner
USER root
RUN apk --no-cache upgrade

# Image should be created with a non-root user. More details:
# https://hub.docker.com/r/nginxinc/nginx-unprivileged
USER nginx

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist/blog /usr/share/nginx/html