const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Whiskey, User } = require('../../models');
const withAuth = require('../../utils/auth');

// get all users
router.get('/', (req, res) => {
    console.log('======================');
    Whiskey.findAll({
        attributes: [
        'id',
        'name',
        'ingredients',
        'garnish'
        ],
    })
    .then(dbWhiskeyData => res.json(dbWhiskeyData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Whiskey.findOne({
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
    .then(dbWhiskeyData => {
        if (!dbWhiskeyData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbWhiskeyData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {

    Whiskey.create({
        name: req.body.name,
        ingredients: req.body.ingredients,
    })
        .then(dbWhiskeyData => res.json(dbWhiskeyData))
        .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});




router.delete('/:id', withAuth, (req, res) => {
    Whiskey.destroy({
        where: {
        id: req.params.id
        }
    })
    .then(dbWhiskeyData => {
        if (!dbWhiskeyData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbWhiskeyData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});



module.exports = router;
