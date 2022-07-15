const { Bourbon } = require('../models');

const bourbonData = [
    {
        name: 'Bourbon Sling',
        ingredients: '1tsp sugar, 2tsp water, 1oz lemon juice, 2oz bourbon, lemon peel',
        garnish: 'orange, cherry',
        image: 'https://www.thecocktaildb.com/images/media/drink/3s36ql1504366260.jpg'
    },
    {
        name: 'Bourbon Sour',
        ingredients: '1/2tsp sugar, 1oz lemon juice, 2oz bourbon',
        garnish: 'orange, cherry',
        image: 'https://www.thecocktaildb.com/images/media/drink/dms3io1504366318.jpg'
    }
];

const seedBourbon = () => Bourbon.bulkCreate(bourbonData);

seedBourbon();

module.exports = seedBourbon;