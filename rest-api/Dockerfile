FROM alpine/git AS clone
WORKDIR /app
RUN git clone https://github.com/secobau/nodejs

FROM node:alpine
WORKDIR /app
COPY --from=clone /app/nodejs/rest-api /app 
RUN npm init -y && npm install $(awk -F"'" '/require\(.[^\.]/{print $2}' index.js)
ENTRYPOINT ["node"]
CMD ["index.js"]

# docker build --tag rest-api:alpine https://raw.githubusercontent.com/secobau/nodejs/master/rest-api/Dockerfile
# docker container run --name rest-api --detach --publish 8080:8080 rest-api:alpine
