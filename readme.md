yarn init -y
yarn add typescript -D
yarn tsc --init

yarn add express
yarn add @types/express -D
yarn add ts-node-dev -D

yarn add prisma ts-node @types/node -D
npx prisma init

npx prisma db push

yarn add @prisma/client @faker-js/faker -D
npx prisma db send

docker container ls
docker exec it NOMECONTAINER sh
npx prisma generate
exit

docker-compose up

yarn add ioredis

docker container ls
docker exec it NOMECONTAINER sh
npm install
exit

docker-compose up
