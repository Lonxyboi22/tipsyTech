const { Whiskey } = require('../models');

const whiskeyData = [
    
];

const seedWhiskey = () => {
    Whiskey.bulkCreate(whiskeyData);
    await Whiskey.bulkCreate(whiskeyData);
};

seedWhiskey();

module.exports = seedWhiskey;