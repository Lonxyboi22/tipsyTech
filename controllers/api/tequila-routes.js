const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Tequila, User } = require('../../models');
const withAuth = require('../../utils/auth');

// get all users
router.get('/', (req, res) => {
    console.log('======================');
    Tequila.findAll({
        attributes: [
        'id',
        'name',
        'ingredients',
        'garnish'
        ],
    })
    .then(dbTequilaData => res.json(dbTequilaData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Tequila.findOne({
        where: {
        id: req.params.id
        },
        attributes: [
            'id',
            'name',
            'ingredients',
            'garnish'
        ],
    })
    .then(dbTequilaData => {
        if (!dbTequilaData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbTequilaData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {

    Tequila.create({
        name: req.body.name,
        ingredients: req.body.ingredients,
    })
        .then(dbTequilaData => res.json(dbTequilaData))
        .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});




router.delete('/:id', withAuth, (req, res) => {
    Tequila.destroy({
        where: {
        id: req.params.id
        }
    })
    .then(dbTequilaData => {
        if (!dbTequilaData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbTequilaData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});



module.exports = router;
