FROM node:16
WORKDIR /app/

COPY . .
RUN npm install
RUN npm build
RUN npm postbuild
EXPOSE 3000
CMD ["npm" , "start"]