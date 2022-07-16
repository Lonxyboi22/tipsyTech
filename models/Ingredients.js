const { Model, DataTypes } = require("sequelize");
//const bcrypt = require('bcrypt');
const sequelize = require("../config/connection");

// create our User model
class Ingredients extends Model {
  // set up method to run on instance data (per user) to check password
}

// create fields/columns for User model
Ingredients.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    ingredients1: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    ingredients2: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    ingredients3: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    ingredients4: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    ingredients5: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    ingredients6: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    ingredients7: {
      type: DataTypes.TEXT,
      allowNull: true,
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

module.exports = Ingredients;
