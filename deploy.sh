#!/bin/sh

cd /var/www/web

git pull

npm install

npx prisma generate

npx prisma migrate deploy

npm run build

pm2 restart "npm run start"
