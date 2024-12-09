const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Produtos = require('./Produtos');

const OpcoesProduto = sequelize.define('OpcoesProduto', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Produtos,
            key: 'id',
        },
        onDelete: 'CASCADE',
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    shape: {
        type: DataTypes.ENUM('square', 'circle'),
        defaultValue: 'square',
    },
    radius: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    type: {
        type: DataTypes.ENUM('text', 'color'),
        defaultValue: 'text',
    },
    values: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: true,
});

Produtos.hasMany(OpcoesProduto, { foreignKey: 'product_id' });
OpcoesProduto.belongsTo(Produtos, { foreignKey: 'product_id' });

module.exports = OpcoesProduto;
