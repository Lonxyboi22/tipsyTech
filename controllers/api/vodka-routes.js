const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Vodka, User } = require("../../models");
const withAuth = require("../../utils/auth");

// get all users
router.get("/", (req, res) => {
  console.log("======================");
  Vodka.findAll({
    attributes: ["id", "name", "ingredients", "garnish"],
  })
    .then((dbVodkaData) => res.json(dbVodkaData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  Vodka.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "name", "ingredients", "garnish"],
  })
    .then((dbVodkaData) => {
      if (!dbVodkaData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbVodkaData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  Vodka.create({
    name: req.body.name,
    ingredients: req.body.ingredients,
  })
    .then((dbVodkaData) => res.json(dbVodkaData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", withAuth, (req, res) => {
  Vodka.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbVodkaData) => {
      if (!dbVodkaData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbVodkaData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
