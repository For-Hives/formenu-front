FROM node:20-bullseye as builder

WORKDIR /usr/app
COPY ./ ./

RUN npm install
RUN npm run build

ENV NODE_ENV production
EXPOSE 3000
CMD ["npm", "start"]
