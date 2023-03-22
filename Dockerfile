FROM node:16
WORKDIR /app/

COPY . .
RUN npm install
RUN npm run build
RUN npm run postbuild
EXPOSE 3000
CMD ["npm" , "start"]
