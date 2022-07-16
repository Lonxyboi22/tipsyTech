const router = require("express").Router();

const userRoutes = require("./user-routes");
const postRoutes = require("./post-routes");
const commentRoutes = require("./comment-routes");

const bourbonRoutes = require("./bourbon-routes");
const tequilaRoutes = require("./tequila-routes");
const rumRoutes = require("./rum-routes");
const whiskeyRoutes = require("./whiskey-routes");
const vodkaRoutes = require("./vodka-routes");
const { Drinks, Ingredients } = require("../../models");
const { getAttributes } = require("../../models/user");
const { response } = require("express");

router.get("/drinks/:name", (req, res) => {
  // res.send(queryJSON);

  Drinks.findAll({
    attributes: ["id", "name", "ingredientsID", "garnish"],
  })
    .then((response) => {
      if (!response) {
        res.status(404).json({ message: "No drinks found at all" });
        return;
      }
      res.json(response);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/comments", commentRoutes);
router.use("/bourbon", bourbonRoutes);
router.use("/tequila", tequilaRoutes);
router.use("/rum", rumRoutes);
router.use("/whiskey", whiskeyRoutes);
router.use("/vodka", vodkaRoutes);

module.exports = router;
