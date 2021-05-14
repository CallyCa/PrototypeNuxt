FROM node:15

ENV HOST 0.0.0.0

ARG API_URL
ARG API_URL_BROWSER

WORKDIR /app

COPY ./package.json .
COPY ./yarn.lock .

RUN yarn install

COPY . .

RUN yarn run build

EXPOSE 5000

CMD yarn start
