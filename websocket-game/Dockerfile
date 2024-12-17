FROM node:16
WORKDIR /app
RUN npm install -g http-server
COPY ./ ./
EXPOSE 8081
CMD ["npm", "run"]