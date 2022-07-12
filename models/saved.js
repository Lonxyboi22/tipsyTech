const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Saved extends Model {}

Saved.init(
    {
        id: {
        type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        drink_name: {
        type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [3]
            }
        },
        user_id: {
        type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        recipe: {
        type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [5]
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'saved_drinks'
    }
);

module.exports = Saved;
