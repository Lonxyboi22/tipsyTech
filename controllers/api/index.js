const router = require('express').Router();

const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

const bourbonRoutes = require('./bourbon-routes');
<<<<<<< HEAD

const tequilaRoutes = require('./tequila-routes');

const rumRoutes = require('./rum-routes');
const whiskeyRoutes = require('./whiskey-routes');
const wineRoutes = require('./wine-routes');
=======
const tequilaRoutes = require('./tequila-routes');
const rumRoutes = require('./rum-routes');
const whiskeyRoutes = require('./whiskey-routes');
const vodkaRoutes = require('./vodka-routes');
>>>>>>> feature/seeding-drinks


router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/bourbon', bourbonRoutes);
router.use('/tequila', tequilaRoutes);
router.use('/rum', rumRoutes);
router.use('/whiskey', whiskeyRoutes);
<<<<<<< HEAD
router.use('/wine', wineRoutes);

=======
router.use('/vodka', vodkaRoutes);
>>>>>>> feature/seeding-drinks


module.exports = router;