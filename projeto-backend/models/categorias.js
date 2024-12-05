const Sequelize = require('sequelize');
const database = require('../config/db');

const Categorias = database.define('categorias', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
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
  }
}, {
  timestamps: true,
  createdAt: 'criadoEm',
  updatedAt: 'atualizadoEm'
});

module.exports = Categorias;