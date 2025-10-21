FROM node:22.20.0-trixie-slim@sha256:166753a468f67efedf3311f2879aa81f984eea4ad629494f6ca7cd4822c93502 AS deps
WORKDIR /app

COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci --frozen-lockfile --legacy-peer-deps --ignore-scripts

# Rebuild the source code only when needed
FROM node:22.20.0-trixie-slim@sha256:166753a468f67efedf3311f2879aa81f984eea4ad629494f6ca7cd4822c93502 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

FROM nginxinc/nginx-unprivileged:alpine@sha256:20c59c7bf3602ebcc0b6866f900698ba2e6c6cb195ec6f36907eb192cd5a1ece AS runner
USER root
RUN apk --no-cache upgrade

# Image should be created with a non-root user. More details:
# https://hub.docker.com/r/nginxinc/nginx-unprivileged
USER nginx

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist/blog /usr/share/nginx/html