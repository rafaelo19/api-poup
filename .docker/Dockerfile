FROM rafaelo19/node:17.0.1 as development

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install --production=false

COPY . .

RUN yarn build

FROM rafaelo19/node:17.0.1 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install --production=true

COPY . .

USER node

COPY --chown=node:node . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]