FROM node:12.13-alpine

WORKDIR /app

ADD package.json /app/package.json
ADD package-lock.json /app/package-lock.json
RUN npm config set registry http://registry.npmjs.org
RUN npm install

ADD ./env/.env.dev /app/.env
ADD ./ /app/

RUN npm run build


EXPOSE 80 443

CMD ["npm", "run", "start:prod"]