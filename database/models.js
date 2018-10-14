const connection = require('./index');
const Sequelize = require('sequelize');

const Todo = connection.define('Todo', {
  id: {
      type: Sequelize.INTEGER, primaryKey: true, autoincrement: true
  },

  name: {
      type: Sequelize.toString, allowNull: false
  }
},

{
  timestamps: false
});

connection 
  .sync()
  .then( () => console.log('synced'))
  .catch( err => console.log(err));

module.exports = { Todo };