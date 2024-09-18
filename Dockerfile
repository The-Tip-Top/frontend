FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --frozen-lockfile

COPY . .

RUN npm run build

FROM node:22-alpine AS runner

ENV NODE_ENV=production

WORKDIR /app

# COPY --from=builder /app/next.config.mjs /app/
# COPY --from=builder /app/.next /app/.next
# COPY --from=builder /app/public /app/public
# COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public


EXPOSE 3000

# CMD ["npx", "next", "start"]
CMD HOSTNAME='0.0.0.0' node server.js

# FROM node:22-alpine AS deps

# WORKDIR /app

# COPY package.json package-lock.json ./
# RUN npm install -g npm@latest
# RUN npm ci

# FROM node:22-alpine AS builder

# WORKDIR /app
# COPY . .
# RUN npm install -g next
# COPY --from=deps /app/node_modules ./app/node_modules
# RUN npm run build
# # RUN npx prisma generate

# FROM node:22-alpine AS runner

# ENV NODE_ENV=production
# WORKDIR /app

# COPY --from=builder /app/next.config.mjs /app/
# COPY --from=builder /app/.next /app/.next
# COPY --from=builder /app/public /app/public
# COPY --from=builder /app/node_modules /app/node_modules

# EXPOSE 3000

# CMD ["npx", "next", "start"]