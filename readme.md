## Starting Servers

```
$ npm run dev
and
$ npm run server

```
## Comamands Knex
```
$ npx knex --cwd ./src/knex init
$ npx knex --cwd ./src/knex migrate:make create-comments-table          (Cria migration na raiz knex)
$ npx knex --cwd ./src/knex migrate:latest                              (Executa as migration recentes)
$ npx knex --cwd ./src/knex migrate:rollback                            (Defaz as migration recentes)

```
## Commands Installers

```
$ npm init -y
$ npm i apollo-server graphql
$ npx https://github.com/luizomf/eslint-prettier
$ npm i sucrase nodemon -D
$ npm install knex --save
$ npm install mysql
```

## Rodar sucrase
node -r sucrase/register src/knex/utils/copy-comments.js