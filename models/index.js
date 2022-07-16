const User = require("./user");
const Post = require("./post");
const Comment = require("./comment");

const Bourbon = require("./Bourbon");
const Vodka = require("./Vodka");
const Rum = require("./Rum");
const Tequila = require("./Tequila");
const Whiskey = require("./Whiskey");
const Ingredients = require("./ingredients");
const Drinks = require("./drinks");
// create associations
User.hasMany(Post, {
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
});

Drinks.belongsTo(Ingredients, {
  foreignKey: "ingredientsID",
});

module.exports = {
  User,
  Post,
  Comment,
  Bourbon,
  Vodka,
  Rum,
  Tequila,
  Whiskey,
  Drinks,
  Ingredients,
};
