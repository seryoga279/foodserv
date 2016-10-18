## Angular2 Express Starter

### Frontend
- Angular 2 ( 2.0 final realase )
- Express
- jwt ( JSON Web Tokens )
- ng-semantic ( https://github.com/vladotesanovic/ngSemantic )
- SystemJS ( loader )

### Backend
- Express
- Sequelize
- Sqlite (for the development env)

## Install
```bash
git clone https://github.com/fkn/foodserv
cd foodserv

# Install dependencies
npm install

# Init and migrate models
npm run sequelize db:migrate

# Seed them
npm run sequelize db:seed:all

# start server
npm run develop

# Application url: http://localhost:3000
```