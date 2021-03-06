# pull official base image
FROM node:14

EXPOSE 3000

# set working directory
WORKDIR ./

# add `/app/node_modules/.bin` to $PATH
ENV PATH node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

COPY --chown=node:node . .

# start app
CMD ["npm", "start"]