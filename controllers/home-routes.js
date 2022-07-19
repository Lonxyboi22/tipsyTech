const router = require('express').Router();

const sequelize = require('../config/connection');
const { Post, User, Comment, Rum, Bourbon, Tequila, Vodka } = require('../models');

router.get('/', (req, res) => {
    console.log(req.session);
    Post.findAll({
        attributes: [
            'id',
            'post_text',
            'title',
            'created_at'
        ],
        include: [
            {
            model: Comment,
            attributes: ['id', 
            'comment_text', 
            'post_id', 
            'user_id', 
            'created_at'],
            include: {
                model: User,
                attributes: ['username']
            }
            },
            {
            model: User,
            attributes: ['username']
            }
        ]
        })
        .then(dbPostData => {
            // pass a single post object into the homepage template
            const posts = dbPostData.map(post => post.get({ plain: true }));
            res.render('homepage', {
                posts,
                loggedIn: req.session.loggedIn
                });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.get('/post/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'post_text',
            'title',
            'created_at'
        ],
        include: [
            {
            model: Comment,
            attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
            include: {
                model: User,
                attributes: ['username']
            }
            },
            {
            model: User,
            attributes: ['username']
            }
        ]
        })
        .then(dbPostData => {
            if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
            }
    
            // serialize the data
            const post = dbPostData.get({ plain: true });
    
            // pass data to template
            res.render('single-post', {
                post,
                loggedIn: req.session.loggedIn
                });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/bourbon/:id', (req, res) => {
    Bourbon.findOne({
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
    .then(dbBourbonData => {
        if (!dbBourbonData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        // serialize the data
        const bourbonPost = dbBourbonData.get({ plain: true });
    
        // pass data to template
        res.render('bourbon-details', {
            bourbonPost,
            loggedIn: req.session.loggedIn
            });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/bourbon', (req, res) => {
    console.log(req.session);
    Bourbon.findAll({
        attributes: [
            'id',
            'name',
            'ingredients',
            'garnish'
        ],
    })
    
        .then(dbBourbonData => {
            // pass a single post object into the homepage template
            const bourbonPosts = dbBourbonData.map(bourbonPost => bourbonPost.get({ plain: true }));
            res.render('bourbon', {
                bourbonPosts,
                loggedIn: req.session.loggedIn
                });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/rum/:id', (req, res) => {
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
        // serialize the data
        const rumPost = dbRumData.get({ plain: true });
    
        // pass data to template
        res.render('rum-details', {
            rumPost,
            loggedIn: req.session.loggedIn
            });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/rum', (req, res) => {
    console.log(req.session);
    Rum.findAll({
        attributes: [
            'id',
            'name',
            'ingredients',
            'garnish'
        ],
    })
    
        .then(dbRumData => {
            // pass a single post object into the homepage template
            const rumPosts = dbRumData.map(rumPost => rumPost.get({ plain: true }));
            res.render('rum', {
                rumPosts,
                loggedIn: req.session.loggedIn
                });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;