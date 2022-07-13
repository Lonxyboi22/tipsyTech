const { Liquor } = require('../models');

const liquorData = [
    {
        name: 'Tequila',
        description: 'Tequila is a distilled spirit made from the blue Agave or Agave Azul, and produced only in five areas of Mexico. It can be drunk on its own or in a cocktail. '
    }
];

const seedLiquor = () => Liquor.bulkCreate(liquorData);

seedLiquor();

module.exports = seedLiquor;
