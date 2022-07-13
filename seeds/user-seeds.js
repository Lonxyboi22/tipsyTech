const { User } = require('../models');

const userData = [
    {
        username: 'jimbo',
        email: 'jimmy@jimbo.com',
        password: 'jimbo123'
    }
];

const seedUser = () => User.bulkCreate(userData);

seedUser();

module.exports = seedUser;