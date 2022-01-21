// Update with your config settings.
const {password} = require('./.env')
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  
    client: 'mysql',
    connection: {
      database: 'graphql',
      user:     'root',
      password: 'root'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  };

  

