# Start from the official Node.js base image
FROM node:20.11.1-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY package*.json ./

# Install dependencies
RUN npm install

# Install PM2 globally
RUN npm install -g pm2

# Copy all files
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the listening port of your app
EXPOSE 3000
EXPOSE 3100

# Run npm start script for Next.js and Node.js server using PM2
CMD ["pm2-runtime", "start", "npm", "--name", "frontend", "--", "run", "dev"]
CMD ["pm2-runtime", "start", "npm", "--name", "backend", "--", "run", "node_start"]
