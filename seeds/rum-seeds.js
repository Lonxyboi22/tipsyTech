const { Rum } = require('../models');

const rumData = [
    {
        name: 'Rum Cooler',
        ingredients: '2oz Rum, 4oz Sprite',
        garnish: 'Lemon wedge'
    },
    {
        name: 'Rum Toddy',
        ingredients: '2oz Rum, 2tsp Powdered sugar, 2tsp Water',
        garnish: 'Lemon peel/Cinnamon stick'
         
    },
    {
        name: 'Tia-Maria',
        ingredients: '1cup Rum, 1cup Water, 1cup Brown sugar, 4tsp coffee, 4tsp Vanilla extract',
        garnish: null
         
    },
    {
        name: 'Aztec Punch',
        ingredients: '5oz Vodka, 8oz Lemonade, 7oz Rum, 1 bottle Ginger ale',
        garnish: null
         
    },
    {
        name: 'Zippys Revenge',
        ingredients: '2oz Rum, 2oz Amaretto, 4oz Kool-Aid of choice',
        garnish: null
    },
    {
        name: 'Rum Punch',
        ingredients: '2oz Rum, 2oz Ginger ale, 1oz frozen Fruit Punch, 1oz forzen Orange juice',
        garnish: 'pineapple'
         
    },
    {
        name: 'Jamaican Coffee',
        ingredients: '1oz Rum, 1oz strong Coffee, 3oz cold water',
        garnish: 'whipped cream'
         
    },
    {
        name: 'Barracuda',
        ingredients: '1 1/2oz Rum, 1/2oz Galliano, 2oz Pineapple juice, 1dash Lime juice, top w/ Prosecco',
        garnish: 'pineapple wedge'
    },
    {
        name: 'Adam Bomb',
        ingredients: '1oz Vodka, 1oz Rum, 1/2oz Triple sec, 1oz Tequila, fruit juice',
        garnish: 'serve over ice'
         
    },
    {
        name: 'Radioactive Long Island',
        ingredients: '1oz Vodka, 1oz Rum, 1oz Gin, 1oz Tequila, 1oz Triple sec, 1oz Raspberry liqueur, 1oz Melon liqueur, 1oz Malibu rum',
        garnish: null
    },
    {
        name: 'Hemingway Special',
        ingredients: '12 parts Rum, 8 parts Grapefruit juice, 3 parts Maraschino liqueur, 3 parts Lime juice',
        garnish: 'lime wedge'
         
    },
    {
        name: 'Zombie',
        ingredients: '1 1/2oz Rum, 1 1/2oz Gold rum, 1oz 151 proof Rum, 1tsp Pernod, 1tsp Grenadine, 1tsp Lime juice, 1 drop bitters',
        garnish: 'Mint leaves'
         
    },
    {
        name: 'Esspresso Rumtini',
        ingredients: '2oz Rum, 1oz Vanilla syrup, 2oz Espresso, 2oz Coffee',
        garnish: 'Ice'
         
    },
    {
        name: 'Funk and Soul',
        ingredients: '4oz Rum, 2oz Apricot Nectar, 2oz Pomegranate juice, juice of 1/2 lemon, Top Soda water',
        garnish: 'spiraled cucumber'
         
    },
    {
        name: 'Bounty Hunter',
        ingredients: '2oz Rum, 2oz Coconut liqueur, dash Pineapple juice, Top Prosecco',
        garnish: 'Blueberries'
         
    },
    {
        name: 'Pure Passion',
        ingredients: '1oz Rum, 1/2oz Passoa, 1 1/2oz Lime juice, 1/4oz Passion fruit syrup, 1dash Peach bitters',
        garnish: 'Mint leaves/passion fruit seeds'
         
    },
    {
        name: 'National Aquarium',
        ingredients: '1/2oz Rum, 1/2oz Vodka, 1/2oz Gin, 1/2oz Blue Curacao, 2oz Sour mix, 1 splash Sprite',
        garnish: 'sweedish fish'
         
    }
];

const seedRum = () => {
    Rum.bulkCreate(rumData);
    
};

seedRum();

module.exports = seedRum;