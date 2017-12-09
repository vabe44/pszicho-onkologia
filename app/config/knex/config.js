var knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'mam_auth_new',
    dateStrings: 'date'
  },
  pool: {
    min: 0,
    max: 100
  }
});

//export the function above so that all of our routes can include this script, and call db.GetConnection whenever they need a connection.
module.exports = knex;