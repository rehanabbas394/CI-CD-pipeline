# stage 1: build nest js Application
FROM node:20

# Set working directory
WORKDIR /app

# set build argument
# ARG DATABASE_URL
# ENV DATABASE_URL=${DATABASE_URL}

# copy package.json and package-lock.json
COPY package*.json /app/

# install dependencies
RUN npm install

# Copy rest of application code
COPY . /app/


# prisma generate
# RUN npx prisma generate

# build application
RUN npm run build


# expose port
EXPOSE 3000


# CMD TO RUN THE APPLICATION
CMD ["node", "dist/src/main.js"]
