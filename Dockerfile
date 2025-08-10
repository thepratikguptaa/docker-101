FROM node

ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PWD=qwerty

RUN mkdir -p docker-101

COPY . /docker-101

CMD ["node", "server.js"]
