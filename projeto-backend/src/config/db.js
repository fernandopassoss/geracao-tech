const Sequelize = require('sequelize');
const sequelize = new Sequelize('crud-geracao-tech', 'root', '', {
    dialect:'mysql',
    host:'localhost', 
    port:3306
})

module.exports = sequelize;