FROM node:18.17.1 as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . /app
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY ./default.conf /etc/nginx/conf.d/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]