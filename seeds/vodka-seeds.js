const { Bourbon } = require('../models');

const bourbonData = [
    {
        name: 'Black Russian',
        ingredients: ['1 1/2oz vodka', '3/4oz kahlua'],
        garnish: 'Ice',
        image: 'https://www.thecocktaildb.com/images/media/drink/3s36ql1504366260.jpg'
    },
    {
        name: 'Bloody Mary',
        ingredients: ['1 1/2oz Vodka', '3oz Tomato juice', '1 dash Lemon', '1/2tsp Worcestershire Sauce', '2-3 drops Hot Sauce'],
        garnish: '1 wedge Lime',
        image: 'https://www.thecocktaildb.com/images/media/drink/dms3io1504366318.jpg'
    },
    {
        name: 'Blue Lagoon',
        ingredients: ['1oz Vodka', '1oz Blue Curacao', 'Lemonade'],
        garnish: 'cherry/lime wedge',
        image: 'https://www.thecocktaildb.com/images/media/drink/dms3io1504366318.jpg'
    },
    {
        name: 'Blue Mountain',
        ingredients: ['1/2oz Vodka', '1 1/2oz Rum', '1/2oz Tia Maria', '1oz Orange juice', '1tsp Lemon Juice'],
        garnish: 'lemon wedge',
        image: 'https://www.thecocktaildb.com/images/media/drink/dms3io1504366318.jpg'
    },
    {
        name: 'Chocolate Black Russian',
        ingredients: ['1/2oz vodka', '1oz kahlua', '5oz Chocolate ice-cream'],
        garnish: null,
        image: 'https://www.thecocktaildb.com/images/media/drink/dms3io1504366318.jpg'
    },
    {
        name: 'God Child',
        ingredients: ['1oz vodka', '1oz Amaretto', '1oz Heavy cream'],
        garnish: 'Cinnamon',
        image: 'https://www.thecocktaildb.com/images/media/drink/dms3io1504366318.jpg'
    },
    {
        name: 'Godmother',
        ingredients: ['1 1/2oz vodka', '3/4oz Amaretto'],
        garnish: 'Ice',
        image: 'https://www.thecocktaildb.com/images/media/drink/dms3io1504366318.jpg'
    },
    {
        name: 'Harvey Wallbanger',
        ingredients: ['1oz vodka', '1/2oz Galliano', '4oz Orange juice'],
        garnish: 'orange wedge',
        image: 'https://www.thecocktaildb.com/images/media/drink/dms3io1504366318.jpg'
    },
    {
        name: 'Kamikaze',
        ingredients: ['1oz Vodka', '1oz Triple sec', '1oz Lime juice'],
        garnish: 'orange, cherry',
        image: 'https://www.thecocktaildb.com/images/media/drink/dms3io1504366318.jpg'
    },
    {
        name: 'Long Island',
        ingredients: ['1/2oz Vodka', '1/2oz light rum', '1/2oz Gin', '1/2oz Tequila', '1/2oz Lemon juice', '1 splash or Coca-Cola'],
        garnish: 'Lemon Wedge',
        image: 'https://www.thecocktaildb.com/images/media/drink/dms3io1504366318.jpg'
    },
    {
        name: 'Orgasm',
        ingredients: '1/2tsp sugar, 1oz lemon juice, 2oz bourbon',
        garnish: 'orange, cherry',
        image: 'https://www.thecocktaildb.com/images/media/drink/dms3io1504366318.jpg'
    },
    {
        name: 'Screwdriver',
        ingredients: '1/2tsp sugar, 1oz lemon juice, 2oz bourbon',
        garnish: 'orange, cherry',
        image: 'https://www.thecocktaildb.com/images/media/drink/dms3io1504366318.jpg'
    },
    {
        name: 'Victory Collins',
        ingredients: '1/2tsp sugar, 1oz lemon juice, 2oz bourbon',
        garnish: 'orange, cherry',
        image: 'https://www.thecocktaildb.com/images/media/drink/dms3io1504366318.jpg'
    },
    {
        name: 'Vodka Tonic',
        ingredients: '1/2tsp sugar, 1oz lemon juice, 2oz bourbon',
        garnish: 'orange, cherry',
        image: 'https://www.thecocktaildb.com/images/media/drink/dms3io1504366318.jpg'
    },
    {
        name: 'White Russian',
        ingredients: '1/2tsp sugar, 1oz lemon juice, 2oz bourbon',
        garnish: 'orange, cherry',
        image: 'https://www.thecocktaildb.com/images/media/drink/dms3io1504366318.jpg'
    },
    {
        name: 'Popped Cherry',
        ingredients: '1/2tsp sugar, 1oz lemon juice, 2oz bourbon',
        garnish: 'orange, cherry',
        image: 'https://www.thecocktaildb.com/images/media/drink/dms3io1504366318.jpg'
    },
    {
        name: 'Atomic Lokade',
        ingredients: '1/2tsp sugar, 1oz lemon juice, 2oz bourbon',
        garnish: 'orange, cherry',
        image: 'https://www.thecocktaildb.com/images/media/drink/dms3io1504366318.jpg'
    },
    {
        name: 'National Aquarium',
        ingredients: '1/2tsp sugar, 1oz lemon juice, 2oz bourbon',
        garnish: 'orange, cherry',
        image: 'https://www.thecocktaildb.com/images/media/drink/dms3io1504366318.jpg'
    },
    {
        name: 'Flaming Dr.Pepper',
        ingredients: '1/2tsp sugar, 1oz lemon juice, 2oz bourbon',
        garnish: 'orange, cherry',
        image: 'https://www.thecocktaildb.com/images/media/drink/dms3io1504366318.jpg'
    },
    {
        name: 'Moscow Mule',
        ingredients: '1/2tsp sugar, 1oz lemon juice, 2oz bourbon',
        garnish: 'orange, cherry',
        image: 'https://www.thecocktaildb.com/images/media/drink/dms3io1504366318.jpg'
    },
    {
        name: 'Sea Breeze',
        ingredients: '1/2tsp sugar, 1oz lemon juice, 2oz bourbon',
        garnish: 'orange, cherry',
        image: 'https://www.thecocktaildb.com/images/media/drink/dms3io1504366318.jpg'
    },
    {
        name: 'Atlantic sun',
        ingredients: '1/2tsp sugar, 1oz lemon juice, 2oz bourbon',
        garnish: 'orange, cherry',
        image: 'https://www.thecocktaildb.com/images/media/drink/dms3io1504366318.jpg'
    },
    {
        name: 'Pink Panty Pulldowns',
        ingredients: '1/2tsp sugar, 1oz lemon juice, 2oz bourbon',
        garnish: 'orange, cherry',
        image: 'https://www.thecocktaildb.com/images/media/drink/dms3io1504366318.jpg'
    },
    {
        name: 'Screaming Orgasm',
        ingredients: '1/2tsp sugar, 1oz lemon juice, 2oz bourbon',
        garnish: 'orange, cherry',
        image: 'https://www.thecocktaildb.com/images/media/drink/dms3io1504366318.jpg'
    },
    {
        name: 'Cosmopolitan',
        ingredients: '1/2tsp sugar, 1oz lemon juice, 2oz bourbon',
        garnish: 'orange, cherry',
        image: 'https://www.thecocktaildb.com/images/media/drink/dms3io1504366318.jpg'
    },
    {
        name: 'Aztec Punch',
        ingredients: '1/2tsp sugar, 1oz lemon juice, 2oz bourbon',
        garnish: 'orange, cherry',
        image: 'https://www.thecocktaildb.com/images/media/drink/dms3io1504366318.jpg'
    },
    {
        name: 'Kool-aid Slammer',
        ingredients: '1/2tsp sugar, 1oz lemon juice, 2oz bourbon',
        garnish: 'orange, cherry',
        image: 'https://www.thecocktaildb.com/images/media/drink/dms3io1504366318.jpg'
    },
    {
        name: 'San Francisco',
        ingredients: '1/2tsp sugar, 1oz lemon juice, 2oz bourbon',
        garnish: 'orange, cherry',
        image: 'https://www.thecocktaildb.com/images/media/drink/dms3io1504366318.jpg'
    },
    {
        name: 'Avalon',
        ingredients: '1/2tsp sugar, 1oz lemon juice, 2oz bourbon',
        garnish: 'orange, cherry',
        image: 'https://www.thecocktaildb.com/images/media/drink/dms3io1504366318.jpg'
    },
    {
        name: 'Orange Crush',
        ingredients: '1/2tsp sugar, 1oz lemon juice, 2oz bourbon',
        garnish: 'orange, cherry',
        image: 'https://www.thecocktaildb.com/images/media/drink/dms3io1504366318.jpg'
    },
    {
        name: 'Bellini Martini',
        ingredients: '1/2tsp sugar, 1oz lemon juice, 2oz bourbon',
        garnish: 'orange, cherry',
        image: 'https://www.thecocktaildb.com/images/media/drink/dms3io1504366318.jpg'
    },
    {
        name: 'Jitterbug',
        ingredients: '1/2tsp sugar, 1oz lemon juice, 2oz bourbon',
        garnish: 'orange, cherry',
        image: 'https://www.thecocktaildb.com/images/media/drink/dms3io1504366318.jpg'
    },
    {
        name: 'Arizona Antifreeze',
        ingredients: '1/2tsp sugar, 1oz lemon juice, 2oz bourbon',
        garnish: 'orange, cherry',
        image: 'https://www.thecocktaildb.com/images/media/drink/dms3io1504366318.jpg'
    },
];

const seedBourbon = () => Bourbon.bulkCreate(bourbonData);

seedBourbon();

module.exports = seedBourbon;