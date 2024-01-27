FROM node:18.19

# Install app dependencies
COPY package*.json ./

# Change Working Directory
WORKDIR /usr/src/app/

RUN npm install

# To copy all the code to the Working Directory
COPY . .

EXPOSE 3000

# To Start the application
CMD [ "node", "index.js" ]