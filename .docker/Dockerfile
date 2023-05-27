FROM node:17.1.0-alpine as development

WORKDIR /usr/src/app

COPY . .

RUN yarn install

EXPOSE 3000

CMD ["yarn", "start:dev"]


FROM development as build

WORKDIR /usr/src/app

COPY . .

RUN yarn

RUN yarn run build

RUN ls -la dist


FROM node:17.1.0-alpine as production

RUN mkdir -p /usr/src/app/dist

WORKDIR /usr/src/app

COPY . .

RUN yarn install --production=true

COPY --from=build /usr/src/app/dist ./dist

CMD ["yarn", "start:dev"]