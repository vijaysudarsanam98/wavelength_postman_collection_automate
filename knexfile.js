const knex = require("knex");
module.exports = {

 

  development: {
    client: 'pg',
    connection: {
      host: 'wa-stage-metadata-db.cluster-cjaaguhfaelo.us-east-1.rds.amazonaws.com',
      database: 'wa_main',
      user:     'admin_user',
      password: 'Getwavelength1',
      port : '5656',

    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      
    }
  }

  

}