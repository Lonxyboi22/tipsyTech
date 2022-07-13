const { User } = require('../models');

const userData = [
    {
        username: 'test',
        email: 'test@test.com',
        password: 'test123'
    }
];

const seedUser = () => User.bulkCreate(userData);

seedUser();

module.exports = seedUser;