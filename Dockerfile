FROM node:lts as dependencies
WORKDIR /intellecta-prod
COPY package.json package-lock.json ./
RUN npm install

FROM node:lts as builder
WORKDIR /intellecta-prod
COPY . .
COPY --from=dependencies /intellecta-prod/node_modules ./node_modules
RUN npm run build

FROM node:lts as runner
WORKDIR /intellecta-prod

COPY --from=builder /intellecta-prod/public ./public
COPY --from=builder /intellecta-prod/package.json .
COPY --from=builder /intellecta-prod/package-lock.json .
COPY --from=builder /intellecta-prod/.next ./.next
COPY --from=builder /intellecta-prod/next.config.js ./
COPY --from=builder /intellecta-prod/node_modules ./node_modules
COPY --from=builder /intellecta-prod/.next/static ./.next/static

EXPOSE 3000
CMD ["npm", "start"]