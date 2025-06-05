# Use the Node.js v14 as the base image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install --production  --legacy-peer-deps

# Copy the source code to the container
COPY . .

# Build the TypeScript code


# Start the application
CMD [ "npm", "run", "start:prod" ]