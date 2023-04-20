FROM node:18.16-alpine

WORKDIR /nss-jgec

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]