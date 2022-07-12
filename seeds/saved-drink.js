const { Saved } = require('../models');

const savedData = [{
        drink_name: "Martini",
        user_id: 1,
        recipe: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    }
];

const seedSaved = () => Saved.bulkCreate(savedData);

module.exports = seedSaved;