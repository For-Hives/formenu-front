FROM node:18-bullseye as builder

WORKDIR /usr/app
COPY ./ ./

RUN npm install pm2@latest -g
RUN npm install --omit=dev
RUN npm run build

ENV NODE_ENV production
EXPOSE 3000
CMD ["pm2", "start", "npm", "--name" , "\"ForMenu\"" , "--", "start"]
