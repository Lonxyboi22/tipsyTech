const { Bourbon } = require('../models');

const bourbonData = [
    {
        name: 'Bourbon Sour',
        ingredients: 'In a shaker half-filled with ice cubes, combine the bourbon, lemon juice, and sugar. Shake well. Strain into a whiskey sour glass, garnish with the orange slice and cherry',
        image: 'https://www.thecocktaildb.com/images/media/drink/dms3io1504366318.jpg'
    }
];

const seedBourbon = () => Bourbon.bulkCreate(bourbonData);

seedBourbon();

module.exports = seedBourbon;