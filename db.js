const {Sequelize} = require('sequelize');
const db = new Sequelize('db_prueba_node', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = db;