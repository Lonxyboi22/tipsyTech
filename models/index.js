const User = require('./User');
const Saved = require('./saved');

// create associations
Saved.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Saved, {
    foreignKey: 'user_id'
});

module.exports = { User, Saved };