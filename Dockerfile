FROM node:17.9.0 as build

RUN mkdir /usr/src/lop-user-frontend

WORKDIR /usr/src/lop-user-frontend

COPY package.json .
COPY package-lock.json .

RUN apt-get update -y
RUN apt-get install -y ca-certificates fonts-liberation  libayatana-appindicator3-1 libasound2 libatk-bridge2.0-0 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgbm1 libgcc1 libglib2.0-0 libgtk-3-0 libnspr4 libnss3 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 lsb-release wget xdg-utils

RUN npm install

COPY . .

EXPOSE 5050

CMD ["node", "index.js"]