FROM node:8-slim

RUN mkdir /src

WORKDIR /src

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD yarn start