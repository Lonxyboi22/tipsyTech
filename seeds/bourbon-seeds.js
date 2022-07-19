const { Bourbon } = require('../models');

const bourbonData = [
    {
        name: 'Bourbon Sling',
        ingredients: '1tsp sugar, 2tsp water, 1oz lemon juice, 2oz bourbon, lemon peel',
        garnish: 'orange, cherry'
    },
    {
        name: 'Bourbon Sour',
        ingredients: '1/2tsp sugar, 1oz lemon juice, 2oz bourbon',
        garnish: 'orange, cherry'
    }
];

const seedBourbon = () => {
    Bourbon.bulkCreate(bourbonData);
    await Bourbon.bulkCreate(bourbonData);

};

seedBourbon();

module.exports = seedBourbon;