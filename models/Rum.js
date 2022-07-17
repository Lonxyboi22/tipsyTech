const { Model, DataTypes } = require('sequelize');
//const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

// create our User model
class Rum extends Model {
  // set up method to run on instance data (per user) to check password
}

// create fields/columns for User model
Rum.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ingredients: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
            unique: true,
        },
        garnish: {
            type: DataTypes.STRING,
            allowNull: false
        }
    
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'rum'
    }
);

module.exports = Rum;