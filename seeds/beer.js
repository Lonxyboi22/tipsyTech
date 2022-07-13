const { Beer } = require('../models');

const beerData = [
    {
        name: 'Budlight',
        description: 'This light beer is brewed using a combination of barley malts, rice and a blend of premium aroma hop varieties. Featuring a fresh, clean taste with subtle hop aromas, this light lager delivers ultimate refreshment with its delicate malt sweetness and crisp finish'
    }
];

const seedBeer = () => User.bulkCreate(beerData);

seedBeer();

module.exports = seedBeer;