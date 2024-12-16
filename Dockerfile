FROM node:22.11.0-alpine as builder

WORKDIR /aspo_web

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

EXPOSE 5173

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder ./aspo_web/dist /usr/share/nginx/html