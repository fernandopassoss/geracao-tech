const Sequelize = require('sequelize')
const database = require('../config/db')

const Usuario = database.define('usuarios', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    firstname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    surname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    user_in_menu: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false
    }
}, {
    timestamps: true,
    createdAt: 'criadoEm',
    updatedAt: 'atualizadoEm'
})

module.exports = Usuario;