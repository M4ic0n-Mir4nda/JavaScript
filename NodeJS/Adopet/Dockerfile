FROM node

WORKDIR /usr/app

COPY package.json /usr/app

RUN npm install

RUN apt-get update && apt-get install -y wait-for-it

COPY . .

CMD ["yarn", "start"]