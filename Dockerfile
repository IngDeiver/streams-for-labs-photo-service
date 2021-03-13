FROM node:15.11.0

WORKDIR /usr/streamsforlab/photo-service


COPY package*.json ./

RUN npm install


# Bundle app source
COPY . .
EXPOSE 5000
CMD [ "npm", "start" ]