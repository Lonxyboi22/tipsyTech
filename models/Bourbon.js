const { Model, DataTypes } = require('sequelize');
//const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

// create our User model
class Bourbon extends Model {
  // set up method to run on instance data (per user) to check password
}

// create fields/columns for User model
Bourbon.init(
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
            allowNull: true,
            unique: true
        },
        image: {
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
        modelName: 'bourbon'
    }
);

module.exports = Bourbon;