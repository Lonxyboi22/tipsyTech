const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Bourbon, User, Rum } = require('../../models');
const withAuth = require('../../utils/auth');

// get all users
router.get('/', (req, res) => {
    console.log('======================');
    Bourbon.findAll({
        attributes: [
        'id',
        'name',
        'ingredients',
<<<<<<< HEAD
        'garnish',
        'image'
=======
        'garnish'
>>>>>>> feature/seeding-drinks
        ],
    })
    .then(dbBourbonData => res.json(dbBourbonData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Bourbon.findOne({
        where: {
        id: req.params.id
        },
        attributes: [
            'id',
            'name',
            'ingredients',
<<<<<<< HEAD
            'garnish',
            'image'
=======
            'garnish'
>>>>>>> feature/seeding-drinks
        ],
    })
    .then(dbBourbonData => {
        if (!dbBourbonData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbBourbonData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {

    Bourbon.create({
        name: req.body.name,
        ingredients: req.body.ingredients,
    })
        .then(dbBourbonData => res.json(dbBourbonData))
        .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});




router.delete('/:id', withAuth, (req, res) => {
    Bourbon.destroy({
        where: {
        id: req.params.id
        }
    })
    .then(dbBourbonData => {
        if (!dbBourbonData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbBourbonData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});



module.exports = router;
