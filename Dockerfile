# Use the official Node.js LTS image as the base image
FROM node:20.2.0

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container's working directory
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port that Next.js uses at runtime (default is 3000)
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]
