const Sequelize = require('sequelize')
const database = require('../config/db')

const Produtos = database.define('produtos', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    enabled: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    user_in_menu: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false
    },
    stock:{
        type: Sequelize.INTEGER,
        allowNull:true,
        defaultValue:0
    },
    description:{
        type: Sequelize.STRING,
        allowNull:true,
    },
    price:{
        type: Sequelize.FLOAT,
        allowNull:false,
    },
    price_with_discount:{
        type: Sequelize.FLOAT,
        allowNull:false,
    }
}, {
    timestamps: true,
    createdAt: 'criadoEm',
    updatedAt: 'atualizadoEm'
})

module.exports = Produtos;