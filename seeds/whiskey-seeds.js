const { Whiskey } = require('../models');

const whiskeyData = [
    {
        name: 'Apple Bomb',
        ingredients: '1.5oz Crown Royal Regal Apple, 3oz pineapple juice, 1oz cranberry juice',
        garnish: 'apple slice'
    },
    {
        name: 'Hot Toddy',
        ingredients: '1.35 oz. Whiskey, 1 tsp fine grain sugar, 2 small clove(s), 1.5 oz. boiling water',
        garnish: 'cinnamon stick'
    },
    {
        name: 'Owens Grandmothers Revenge',
        ingredients: '12 oz Whiskey, 12 oz Beer, 2 oz frozen Lemonade, 1 cup crushed Ice',
        garnish: 'lemon slice'
    }
];

const seedWhiskey = () => Whiskey.bulkCreate(whiskeyData);
    


seedWhiskey();

module.exports = seedWhiskey;