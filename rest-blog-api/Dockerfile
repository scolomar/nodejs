FROM alpine/git AS clone
WORKDIR /app
RUN git clone https://github.com/secobau/nodejs

FROM node:alpine
WORKDIR /app
COPY --from=clone /app/nodejs/rest-blog-api /app 
RUN npm init -y && npm install $(awk -F"'" '/require\(.[^\.]/{print $2}' index.js)
ENTRYPOINT ["node"]
CMD ["index.js"]

# docker build --tag rest-blog-api:alpine https://raw.githubusercontent.com/secobau/nodejs/master/rest-blog-api/Dockerfile
# docker container run --name rest-blog-api --detach --publish 3000:8080 rest-blog-api:alpine
