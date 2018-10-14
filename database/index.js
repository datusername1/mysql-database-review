const mysql = require('mysql');
const Sequelize = require('sequelize');

const connection = new Sequelize ('dbreview', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  operatorAliases: false
});


connection.authenticate() 
  .then( ()  => console.log('connect to mysql'))
  .catch( err => console.log(err));


module.exports = connection;