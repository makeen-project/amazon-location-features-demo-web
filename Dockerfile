# Dockerfile
FROM node:18-alpine

# Create app directory
WORKDIR /amazon-location-features-demo-web-docker-app

# Install app dependencies
COPY package*.json .
RUN npm install --legacy-peer-deps

# Copy app source
COPY . .

# Build the app
RUN npm run build

# Expose the port
EXPOSE 3000

# Run the app
CMD ["npx", "serve", "-s", "-p", "3000", "build/"]