FROM node:20

WORKDIR /app

COPY tools/package*.json ./tools/

RUN cd tools && npm ci

COPY . .

WORKDIR /app/tools

CMD ["npm", "test"]


