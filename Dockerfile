FROM node:24.11.1-trixie-slim@sha256:4623e8ac1eb5f35b0a91b85424283c1b97a416a77375dfa6a2e9bfb0b2c351c9 AS deps
WORKDIR /app

COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci --frozen-lockfile --legacy-peer-deps --ignore-scripts

# Rebuild the source code only when needed
FROM node:24.11.1-trixie-slim@sha256:4623e8ac1eb5f35b0a91b85424283c1b97a416a77375dfa6a2e9bfb0b2c351c9 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

FROM nginxinc/nginx-unprivileged:alpine@sha256:9bf2484108733e4c1c72280f83ba30d772d291d44049403bd6d592f216137771 AS runner
USER root
RUN apk --no-cache upgrade

# Image should be created with a non-root user. More details:
# https://hub.docker.com/r/nginxinc/nginx-unprivileged
USER nginx

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist/blog /usr/share/nginx/html