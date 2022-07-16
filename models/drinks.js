const { Model, DataTypes } = require("sequelize");
//const bcrypt = require('bcrypt');
const sequelize = require("../config/connection");

// create our User model
class Drinks extends Model {
  // set up method to run on instance data (per user) to check password
}

// create fields/columns for User model
Drinks.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ingredientsID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      references: {
        model: "Ingredients",
        key: "id",
      },
    },
    garnish: {
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
    modelName: "vodka",
  }
);

module.exports = Drinks;
