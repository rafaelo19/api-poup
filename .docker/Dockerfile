FROM rafaelo19/node:17.0.1

WORKDIR /home/node/app

COPY package*.json .

COPY . .

RUN yarn install

COPY --chown=node:node . .

USER node

CMD [ "yarn", "start" ]