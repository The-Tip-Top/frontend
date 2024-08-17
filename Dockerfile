FROM node:latest AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --frozen-lockfile

COPY . .

RUN npm run build

FROM node:latest AS runner

ENV NODE_ENV=production

WORKDIR /app

COPY --from=builder /app/package.json /app/package-lock.json /app/
COPY --from=builder /app/.next /app/.next
COPY --from=builder /app/public /app/public
COPY --from=builder /app/node_modules /app/node_modules

EXPOSE 3002

CMD ["npx", "next", "start"]
