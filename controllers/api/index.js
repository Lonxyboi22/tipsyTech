const router = require('express').Router();

const userRoutes = require('./api/user-routes.js');
const postRoutes = require('./api/post-routes');
const commentRoutes = require('./api/comment-routes');

const bourbonRoutes = require('./api/bourbon-routes');

const tequilaRoutes = require('./api/tequila-routes');

const rumRoutes = require('./api/rum-routes');
const whiskeyRoutes = require('./api/whiskey-routes');
const wineRoutes = require('./api/wine-routes');


router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/bourbon', bourbonRoutes);
router.use('/tequila', tequilaRoutes);
router.use('/rum', rumRoutes);
router.use('/whiskey', whiskeyRoutes);


module.exports = router;