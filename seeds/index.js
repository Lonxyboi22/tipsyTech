const seedUser = require('./user-seeds');

const sequelize = require('../config/connection');
const seedBourbon = require('./bourbon-seeds');
const seedRum = require('./rum-seeds');
const seedTequila = require('./tequila-seeds');
const seedVodka = require('./vodka-seeds');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedUser();
    console.log('\n----- CATEGORIES SEEDED -----\n');
    await seedBourbon();
    console.log('\n----- CATEGORIES SEEDED -----\n');
    await seedRum();
    console.log('\n----- CATEGORIES SEEDED -----\n');
    await seedTequila();
    console.log('\n----- CATEGORIES SEEDED -----\n');
    await seedVodka();
    console.log('\n----- CATEGORIES SEEDED -----\n');



    process.exit(0);
};

seedAll();