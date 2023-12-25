FROM node:latest
 
WORKDIR /app
 
COPY package*.json ./

RUN npm install --ignore-engines

COPY . .
 
EXPOSE 5173
 
CMD ["npm", "run", "dev"]