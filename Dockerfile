FROM node

WORKDIR /portfolio_02

COPY package*.json ./

RUN npm ci

COPY . .

CMD ["npm", "run", "dev", "--", "--hostname", "0.0.0.0"]
