FROM node:22-alpine

# create work directory in app folder
WORKDIR /app

# install required packages for node image
RUN apk --no-cache add g++ make python3 git

# copy over package.json files
COPY package.json ./
COPY package-lock.json ./

# install all dependencies
RUN npm install && npm cache clean --force

# copy over all files to the work directory
COPY . .

# build the project
RUN npm run build

# expose the host and port 3000 to the server
EXPOSE 3000

# run the build project with node
ENTRYPOINT ["node", ".output/server/index.mjs"]