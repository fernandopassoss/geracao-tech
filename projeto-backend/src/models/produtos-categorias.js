const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Produtos = require('./Produtos');
const Categorias = require('./categorias');


const ProdutosCategorias = sequelize.define('ProdutosCategorias', {
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Produtos,
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Categorias,
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
}, {
  timestamps: true,
});

Produtos.belongsToMany(Categorias, { through: ProdutosCategorias, foreignKey: 'product_id' });
Categorias.belongsToMany(Product, { through: ProdutosCategorias, foreignKey: 'category_id' });

module.exports = ProductCategory;
