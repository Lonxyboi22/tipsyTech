const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Wine, User } = require('../../models');
const withAuth = require('../../utils/auth');

// get all users
router.get('/', (req, res) => {
    console.log('======================');
    Wine.findAll({
        attributes: [
        'id',
        'name',
        'ingredients',
        'image'
        ],
    })
    .then(dbWineData => res.json(dbWineData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Wine.findOne({
        where: {
        id: req.params.id
        },
        attributes: [
            'id',
            'name',
            'ingredients',
            'image'
        ],
    })
    .then(dbWineData => {
        if (!dbWineData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbWineData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {

    Wine.create({
        name: req.body.name,
        ingredients: req.body.ingredients,
    })
        .then(dbWineData => res.json(dbWineData))
        .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});




router.delete('/:id', withAuth, (req, res) => {
    Wine.destroy({
        where: {
        id: req.params.id
        }
    })
    .then(dbWineData => {
        if (!dbWineData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbWineData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});



module.exports = router;
