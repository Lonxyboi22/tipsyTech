const { Model, DataTypes } = require('sequelize');
//const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

// create our User model
class Liquor extends Model {
  // set up method to run on instance data (per user) to check password
}

// create fields/columns for User model
Liquor.init(
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
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'liquor'
    }
);

module.exports = Liquor;