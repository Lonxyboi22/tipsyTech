const { Vodka } = require('../models');

const vodkaData = [
    {
        name: 'Black Russian',
        ingredients: '1 1/2oz vodka, 3/4oz kahlua',
        garnish: 'Ice'
    },
    {
        name: 'Bloody Mary',
        ingredients: '1 1/2oz Vodka, 3oz Tomato juice, 1 dash Lemon, 1/2tsp Worcestershire Sauce, 2-3 drops Hot Sauce',
        garnish: '1 wedge Lime'
         
    },
    {
        name: 'Blue Lagoon',
        ingredients: '1oz Vodka, 1oz Blue Curacao, Lemonade',
        garnish: 'cherry/lime wedge'
         
    },
    {
        name: 'Blue Mountain',
        ingredients: '1/2oz Vodka, 1 1/2oz Rum, 1/2oz Tia Maria, 1oz Orange juice, 1tsp Lemon Juice',
        garnish: 'lemon wedge'
         
    },
    {
        name: 'Chocolate Black Russian',
        ingredients: '1/2oz vodka, 1oz kahlua, 5oz Chocolate ice-cream',
        garnish: null
         
    },
    {
        name: 'God Child',
        ingredients: '1oz vodka, 1oz Amaretto, 1oz Heavy cream',
        garnish: 'Cinnamon'
         
    },
    {
        name: 'Godmother',
        ingredients: '1 1/2oz vodka, 3/4oz Amaretto',
        garnish: 'Ice'
         
    },
    {
        name: 'Harvey Wallbanger',
        ingredients: '1oz vodka, 1/2oz Galliano, 4oz Orange juice',
        garnish: 'orange wedge'
         
    },
    {
        name: 'Kamikaze',
        ingredients: '1oz Vodka, 1oz Triple sec, 1oz Lime juice',
        garnish: 'orange, cherry'
         
    },
    {
        name: 'Long Island',
        ingredients: '1/2oz Vodka, 1/2oz light rum, 1/2oz Gin, 1/2oz Tequila, 1/2oz Lemon juice, 1 splash of Coca-Cola',
        garnish: 'Lemon Wedge'
         
    },
    {
        name: 'Orgasm',
        ingredients: '1/2oz vodka, 1/2oz white Creme de Cacao, 1/2oz Amaretto, 1/2oz Triple sec, 1oz Light cream',
        garnish: null
         
    },
    {
        name: 'Screwdriver',
        ingredients: '2oz vodka, Orange juice',
        garnish: 'orange wedge'
         
    },
    {
        name: 'Victory Collins',
        ingredients: '1 1/2oz vodka, 3oz Lemon juice, 3oz Grape juice, 1tsp Powdered sugar',
        garnish: 'Orange wedge, Mint leaves'
         
    },
    {
        name: 'Vodka Tonic',
        ingredients: '2oz vodka, Tonic water',
        garnish: 'Orange wedge'
         
    },
    {
        name: 'White Russian',
        ingredients: '2oz vodka, 1oz Kahlua, Light cream',
        garnish: 'Ice'
         
    },
    {
        name: 'Sex on the Beach',
        ingredients: '1oz Vodka, 3/4oz Peach Schnapps, Cranberry juice, Grapefruit juice',
        garnish: 'orange, rose'
         
    },
    {
        name: 'Popped Cherry',
        ingredients: '2oz Vodka, 2oz Cherry liqueur, 4oz Cranberry juice, 4oz Orange juice',
        garnish: 'orange, cherry'
         
    },
    {
        name: 'Atomic Lokade',
        ingredients: '1oz Vodka, 5oz Lemonade, 1/2oz Blue Curacao, 1/2oz Triple sec, sugar',
        garnish: 'Ice'
         
    },
    {
        name: 'National Aquarium',
        ingredients: '1/2oz Rum, 1/2oz Vodka, 1/2oz Gin, 1/2oz Blue Curacao, 2oz Sour mix, 1 splash Sprite',
        garnish: 'sweedish fish'
         
    },
    {
        name: 'Flaming Dr.Pepper',
        ingredients: '1oz Amaretto, 1oz Vodka, 1oz 151 proof Rum, 1oz Dr.Pepper, 1oz Beer',
        garnish: 'Fire, shot glass'
         
    },
    {
        name: 'Moscow Mule',
        ingredients: '2oz vodka, 2oz Lime juice, 8oz Ginger Ale',
        garnish: 'Ice, Lime wedge'
         
    },
    {
        name: 'Sea Breeze',
        ingredients: '1 1/2oz vodka, 4oz Cranberry juice, 1oz Grapefruit juice',
        garnish: 'Lime wedge'
         
    },
    {
        name: 'Pink Panty Pulldowns',
        ingredients: '2oz vodka, 2oz Pink Lemonade, Sprite',
        garnish: 'Lemon Wedge'
         
    },
    {
        name: 'Ice Pick',
        ingredients: '1 1/2oz Vodka, 6oz Iced tea, Lemon juice to taste',
        garnish: 'Ice, Lemon wedge'
         
    },
    {
        name: 'Screaming Orgasm',
        ingredients: '1oz Vodka, 1/2oz Kahlua, 1 1/2oz Baileys irish cream',
        garnish: null
         
    },
    {
        name: 'Cosmopolitan',
        ingredients: '1oz Vodka, 1/2oz Citris liqueur, 1/2oz Lime juice, 1 splash Cranberry juice',
        garnish: 'orange, cherry',
         
    },
    {
        name: 'Aztec Punch',
        ingredients: '5oz Vodka, 8oz Lemonade, 7oz Rum, 1 bottle Ginger ale',
        garnish: null
    },
    {
        name: 'Kool-aid Slammer',
        ingredients:  '1/2oz Vodka, 1/2oz Kool-Aid of choice',
        garnish: 'Lime rind swirl'
    },
    {
        name: 'San Francisco',
        ingredients: '2oz Vodka, 2oz Creme de Banane, 1oz Grenadine, Orange juice',
        garnish: 'orange, strawberry'
         
    },
    {
        name: 'Avalon',
        ingredients: '3oz Vodka, 1 1/2oz Lemon juice, 1oz Pisang Ambon, 6oz Apple juice, Lemonade',
        garnish: 'cucumber swirl'
    },
    {
        name: 'Orange Crush',
        ingredients: '1oz Vodka, 1oz Triple sec, 1oz Orange Juice',
        garnish: 'sugar rimmed'
    },
    {
        name: 'Bellini Martini',
        ingredients: 'Ice, 3oz Vodka, 1 1/2oz Peach Nectar, 1 1/2oz Peach schnapps',
        garnish: 'Lemon peel'
    },
    {
        name: 'Jitterbug',
        ingredients: '1 1/2oz Vodka, 3oz Gin, 3 dashes Grenadine, 1 1/2oz Lime juice, 3 dashes Simple syrup, Soda water',
        garnish: 'rimmed with sugar'
    },
    {
        name: 'Arizona Antifreeze',
        ingredients: '1/3oz Vodka, 1/3oz Melon liqueur, 1/3oz Sweet and sour',
        garnish: 'Pineapple'
    },
    {
        name: 'Pornstar Martini',
        ingredients: '1oz Vodka, 1oz Passoa, 1/3oz Passion fruit juice, 1/3oz Lime juice, 1.5oz Prosecco',
        garnish: 'Passionfruit slice'
    }
];

const seedVodka = () => Vodka.bulkCreate(vodkaData)

seedVodka();

module.exports = seedVodka;