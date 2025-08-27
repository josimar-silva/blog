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

FROM nginxinc/nginx-unprivileged:alpine@sha256:d9a05c0efb51a5fa268554b8e66e6b43d9c51c6fd7dac1997c1cebe2d8ef1cbb AS runner
USER root
RUN apk --no-cache upgrade

# Image should be created with a non-root user. More details:
# https://hub.docker.com/r/nginxinc/nginx-unprivileged
USER nginx

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist/blog /usr/share/nginx/html