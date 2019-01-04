# base image
FROM node:11.1.0 as frontend

# set working directory
RUN mkdir -p /usr/src/frontend
WORKDIR /usr/src/frontend
COPY package.json yarn.lock /usr/src/frontend/

RUN yarn install

COPY . /usr/src/frontend

RUN yarn build

# Stage 2 - the production environment
FROM nginx:1.12-alpine
COPY --from=frontend /usr/src/frontend/build /usr/share/nginx/html
COPY --from=frontend /usr/src/frontend/proxy/bio.conf /etc/nginx/conf.d/bio.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]