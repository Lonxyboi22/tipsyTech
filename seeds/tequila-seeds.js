const { Tequila } = require("../models");


const tequilaData = [
    {
        name: 'Strawberry Margarita',
        ingredients: '1/2oz Strawberry schnapps, 1oz Tequila, 1/2oz Triple sec, 1oz Lemon juice, 1oz Strawberry puree',
        garnish: 'Strawberry, Salted rim'
    },
    {
        name: 'Long Island',
        ingredients: '1/2oz Vodka, 1/2oz Light Rum, 1/2oz Gin, 1/2oz Tequila, 1/2oz Lemon juice, 1splash Coca-Cola',
        garnish: 'Lemon Wedge'
    },
    {
        name: 'Radioactive Long Island',
        ingredients: '1oz Vodk, 1oz Rum, 1oz Gin, 1oz Tequila, 1oz Triple sec, 1oz Raspberry liqueur, 1oz Melon liqueur, 1oz Malibu rum',
        garnish: null
    },
    {
        name: 'Tequila Fizz',
        ingredients: '2oz Tequila, 2tbsp Lemon juice, 3/4oz Grenadine, 1 Egg White, Ginger ale',
        garnish: null
         
    },
    {
        name: 'Tequila Sour',
        ingredients: '2oz Tequila, 1/2oz Lemon juice, 1tsp Powdered sugar',
        garnish: 'Lemon wedge, Cherry'
         
    },
    {
        name: 'Margarita',
        ingredients: '1 1/2oz Tequila, 1/2oz Triple sec, 1oz Lime juice',
        garnish: 'Salt rimmed'
         
    },
    {
        name: 'Brave Bull Shooter',
        ingredients: '1/2oz Tequila, 1/2oz Tobasco sauce',
        garnish: null
    },
    {
        name: 'Tequila Sunrise',
        ingredients: '2oz Tequila, 1oz Grenadine, Orange juice',
        garnish: 'Orange wedge, Cherries'
         
    },
    {
        name: '110 in the Shade',
        ingredients: '1 1/2oz Tequila, 16oz Lager',
        garnish: 'Mint Leaves'
         
    },
    {
        name: 'Amaretto Stone Sour Alt',
        ingredients: '2oz Tequila, 2oz Amaretto, splash Orange juice, 2oz Sour mix',
        garnish: 'Orange wedge, Cherry'
    },
    {
        name: 'Whitecap Margarita',
        ingredients: '1/4cup Cream of coconut, 3tbsp Lime juice, 2oz Tequila',
        garnish: 'serve over ice'
         
    },
    {
        name: 'Moranguito',
        ingredients: '1oz Absinthe, 1oz Tequila, 1/2oz grenadine',
        garnish: 'lime wedge'
         
    },
    {
        name: 'Apple Grande',
        ingredients: '3oz Tequila, 12oz Apple cider',
        garnish: 'Cinnamon stick'
         
    },
    {
        name: 'Downshift',
        ingredients: '2oz Tequila, 2parts Fruit punch, 1part Sprite, Float 151 proof Rum',
        garnish: 'Ice'
         
    },
    {
        name: 'Vampiro',
        ingredients: '2oz Tequila, 1oz Tomato juice, 1oz Orange juice, 1/2oz lime juice, 1dash Simple syrup',
        garnish: 'Salted rim'
         
    },
    {
        name: 'Paloma',
        ingredients: '1 1/2oz Tequila, 3oz Grapefruit juice',
        garnish: 'Grapefruit wedge'
         
    },
    {
        name: 'Winter Rita',
        ingredients: '1 2/3oz Tequila, 1/4oz Campari, 3/4oz Lime juice, 1/2oz Orange juice, 1/2oz Rosemary syrup',
        garnish: 'Salted rim'
         
    },
    {
        name: 'Adam Bomb',
        ingredients: '1oz Vodka, 1oz Rum, 1/2oz Triple sec, 1oz Tequila, fruit juice',
        garnish: 'serve over ice'
         
    }
];
const seedTequila = () => {
    Tequila.bulkCreate(tequilaData);
    await Tequila.bulkCreate(tequilaData);
};

seedTequila();

module.exports = seedTequila;