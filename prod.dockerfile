FROM node:latest
WORKDIR /app

COPY package.json yarn.lock /app/
RUN yarn install

COPY . /app
RUN yarn build

EXPOSE 80

CMD ["yarn", "run", "start:prod"]