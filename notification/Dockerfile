FROM node:14.7.0-alpine3.10

# Set the working directory.
WORKDIR /notification/src/app

# Copy the file from your host to your current location.
#COPY package.json .

# Run the command inside your image filesystem.
#RUN npm install

# Add metadata to the image to describe which port the container is listening on at runtime.
EXPOSE 3000

# Run the specified command within the container.
CMD [ "node", "bundle.js" ]

# Copy the rest of your app's source code from your host to your image filesystem.
COPY ./dist .
