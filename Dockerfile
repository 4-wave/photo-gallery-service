FROM node:8.15.1-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

EXPOSE 3004

CMD [ "npm", "start" ]




// TEST if my container works by itself, then try to spin up a new image for EC2 with its extension cus it looks
// like the image is not being updated even though im changing stuff in it