# Use the official Node.js image as a base image
FROM node:alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

COPY . . 

# Install http-server globally
RUN npm install -g http-server

EXPOSE 5500

# Start http-server to serve the static files
CMD ["http-server", "-p", "5500"]
