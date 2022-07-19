const { Whiskey } = require('../models');

const whiskeyData = [
    {
        name: 'Damned if you do',
        ingredients: 'Pour into shot glass. Put in mouth. Repeat as deemed necessary',
        garnish: null
    },
    {
        name: 'Hot Toddy',
        ingredients: '1.35 oz. Whiskey, 1 tsp fine grain sugar, 2 small clove(s), 1.5 oz. boiling water',
        garnish: 'cinnamon stick'
    },
    {
        name: 'Owens Grandmothers Revenge',
        ingredients: '12 oz Whiskey, 12 oz Beer, 2 oz frozen Lemonade, 1 cup crushed Ice',
        garnish: null
    }
];

const seedWhiskey = () => {
    Whiskey.bulkCreate(whiskeyData);
    await Whiskey.bulkCreate(whiskeyData);
};

seedWhiskey();

module.exports = seedWhiskey;