
FROM node:latest AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

COPY . .

RUN npm run build


FROM node:latest AS runner

ENV NODE_ENV=production

WORKDIR /app


EXPOSE 3002

CMD ["npx", "next", "start"]
