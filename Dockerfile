# pull official base image
FROM node:14.5.0-alpine

# set working directory
WORKDIR /app

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

# add app
COPY . ./

# start app
CMD ["npm", "start"]