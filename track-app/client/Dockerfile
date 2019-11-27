FROM node:latest
ENV API_SERVER_URL="http://server:4400"
ENV WS_SERVER_URL="ws://server:4401"
RUN mkdir -p /usr/src/client
COPY . /usr/src/client
WORKDIR /usr/src/client
RUN npm install
EXPOSE 3000
CMD ["npm","run","start"]