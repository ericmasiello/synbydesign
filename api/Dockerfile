FROM node:10.7.0

# reset npm loglevel (https://github.com/nodejs/docker-node/issues/57)
ENV NPM_CONFIG_LOGLEVEL warn

# export listening port
ENV PORT 5000
EXPOSE $PORT

WORKDIR /opt/code

COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

CMD ["npm", "start"]