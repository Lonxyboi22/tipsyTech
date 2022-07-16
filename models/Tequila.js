const { Model, DataTypes } = require('sequelize');
//const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

// create our User model
class Tequila extends Model {
  // set up method to run on instance data (per user) to check password
}

// create fields/columns for User model
Tequila.init(
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
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        garnish: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'tequila'
    }
);

module.exports = Tequila;