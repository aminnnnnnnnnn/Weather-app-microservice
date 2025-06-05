FROM node:18.16.0 as node
RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

# Stage 2
FROM nginx:alpine
COPY --from=node /app/dist/frontend-app /usr/share/nginx/html

