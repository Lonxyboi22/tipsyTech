const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');

const Bourbon = require('./Bourbon');
const Vodka = require('./Vodka');
const Rum = require('./Rum');
const Tequila = require('./Tequila');
const Whiskey = require('./Whiskey');
const Wine = require('./Wine');

// create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

module.exports = { User, Post, Comment, Bourbon, Vodka, Rum, Tequila , Whiskey, Wine };