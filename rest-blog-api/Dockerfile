FROM alpine/git AS clone
WORKDIR /app
RUN git clone https://github.com/secobau/nodejs

FROM node:alpine
WORKDIR /app
COPY --from=clone /app/nodejs/rest-blog-api /app 
RUN npm init -y && npm install $(awk -F"'" '/require\(.[^\.]/{print $2}' index.js)
ENTRYPOINT ["node"]
CMD ["index.js"]
