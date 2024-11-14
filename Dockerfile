# Use an official Node.js runtime as a parent image
FROM node:21.1.0

# Set the working directory in the container
WORKDIR /app

# Copy the package*.json files to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the application code to the working directory
COPY . .

# Expose the port the server will run on
EXPOSE 3000

# Run the command to start the server when the container launches
CMD ["npm", "run", "prod"]
