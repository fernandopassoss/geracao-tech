const Sequelize = require('sequelize');
const database = require('../config/db');
const Produtos = require('./Produtos');

const ImagensProduto = database.define('imagens_produto', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  product_id: {
    type: Sequelize.STRING,
    allowNull: false,
    references:{
        model:Produtos,
        key:'id',
    }
  },
  enabled: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
    defaultValue:false,
  },
  path: {
    type: Sequelize.STRING,
    allowNull: false,   
  }
}, {
  timestamps: true,
  createdAt: 'criadoEm',
  updatedAt: 'atualizadoEm'
});

Produtos.hasMany(ImagensProduto,{foreignKey:'product_id'});
ImagensProduto.belongsTo(Produtos,{foreignKey:'product_id'});

module.exports = ImagensProduto;