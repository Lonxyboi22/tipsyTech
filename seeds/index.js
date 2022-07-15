const seedUser = require('./user-seeds');

const sequelize = require('../config/connection');
const seedBourbon = require('./bourbon-seeds');
const seedDrinks = require('./drinks');
const seedLiquor = require('./liquor');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedUser();
    console.log('\n----- CATEGORIES SEEDED -----\n');
    await seedBourbon();
    console.log('\n----- CATEGORIES SEEDED -----\n');
    await seedDrinks();
    console.log('\n----- CATEGORIES SEEDED -----\n');
    await seedLiquor();
    console.log('\n----- CATEGORIES SEEDED -----\n');

    process.exit(0);
};

seedAll();