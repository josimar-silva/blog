FROM node:24.11.1-trixie-slim@sha256:fcdfd7bcd8f641c8c76a8950343c73912d68ba341e8dd1074e663b784d3e76f4 AS deps
WORKDIR /app

COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci --frozen-lockfile --legacy-peer-deps --ignore-scripts

# Rebuild the source code only when needed
FROM node:24.11.1-trixie-slim@sha256:fcdfd7bcd8f641c8c76a8950343c73912d68ba341e8dd1074e663b784d3e76f4 AS builder
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