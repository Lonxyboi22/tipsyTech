const { Whiskey } = require('../models');

const whiskeyData = [
    
];

const seedWhiskey = () => Whiskey.bulkCreate(whiskeyData);

seedWhiskey();

module.exports = seedWhiskey;