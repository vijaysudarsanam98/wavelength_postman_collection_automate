const knex = require("knex");
module.exports = {

 

  development: {
    client: 'postgressql',
    connection: {
        port : '5656',
      database: 'wa_main',
      user:     'admin_user',
      password: 'Getwavelength1'
    },
  }

  

}