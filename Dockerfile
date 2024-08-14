FROM node:8.9.4
WORKDIR /usr/src/app
COPY . /usr/src/app
EXPOSE 4299
RUN npm install -g @angular/cli@7.3.10
RUN npm install
CMD ["ng", "serve", "--host", "0.0.0.0"]
