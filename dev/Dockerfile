FROM node:8.7-alpine

WORKDIR /srv
COPY . .

RUN npm i -g nodemon
RUN apk add --no-cache curl

EXPOSE 8090 8090
EXPOSE 8898 8898

CMD npm i && npm run server-watch
