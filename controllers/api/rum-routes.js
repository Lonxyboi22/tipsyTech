const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Rum, User } = require('../../models');
const withAuth = require('../../utils/auth');

// get all users
router.get('/', (req, res) => {
    console.log('======================');
    Rum.findAll({
        attributes: [
        'id',
        'name',
        'ingredients',
        'garnish'
        ],
    })
    .then(dbRumData => res.json(dbRumData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Rum.findOne({
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
    .then(dbRumData => {
        if (!dbRumData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbRumData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {

    Rum.create({
        name: req.body.name,
        ingredients: req.body.ingredients,
    })
        .then(dbRumData => res.json(dbRumData))
        .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});




router.delete('/:id', withAuth, (req, res) => {
    Rum.destroy({
        where: {
        id: req.params.id
        }
    })
    .then(dbRumData => {
        if (!dbRumData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbRumData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});



module.exports = router;
