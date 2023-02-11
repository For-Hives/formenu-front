FROM node:18-bullseye as builder

WORKDIR /usr/app
COPY ./ ./
RUN npm install --omit=dev
RUN npm run build

ENV NODE_ENV production
EXPOSE 3000
CMD ["npm", "start"]
