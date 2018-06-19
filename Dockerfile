FROM node:8.11
ADD . /code
WORKDIR /code
RUN npm install
CMD node app.js