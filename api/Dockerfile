FROM node:4-onbuild

RUN mkdir -p /var/www/ets
WORKDIR /var/www/ets

COPY package.json /var/www/ets
RUN npm install

COPY . /var/www/ets

EXPOSE 8080
CMD [ "npm", "start" ]