FROM node:8.15.1-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

EXPOSE 3004

CMD [ "npm", "start" ]
