# Use a Node.js base image
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

EXPOSE 3002

CMD [ "npm", "run", "start" ]
