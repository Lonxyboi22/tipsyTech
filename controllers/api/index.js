const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

const bourbonRoutes = require('./bourbon-routes');

const tequilaRoutes = require('./tequila-routes');

const rumRoutes = require('./rum-routes');
const whiskeyRoutes = require('./whiskey-routes');
const wineRoutes = require('./wine-routes');


router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/bourbon', bourbonRoutes);
router.use('/tequila', tequilaRoutes);
router.use('/rum', rumRoutes);
router.use('/whiskey', whiskeyRoutes);
router.use('/wine', wineRoutes);


module.exports = router;
