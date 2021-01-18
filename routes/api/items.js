const express = require("express"),
  mongoose = require("mongoose"),
  router = express.Router();

//Item Model
const Item = require("../../models/Item");

//Index Route
router.get("/", (req, res) => {
  Item.find()
    //-1 is sort by descending
    .sort({ date: -1 })
    .then((items) => res.status(200).json(items))
    .catch((err) => console.log(err));
});

//Index Route
router.get("/list", (req, res) => {
  Item.find()
    //-1 is sort by descending
    .sort({ date: -1 })
    .then((items) => res.status(200).json(items))
    .catch((err) => console.log(err));
});

//Show Route
router.get("/list/:id", (req, res) => {
  Item.findById(req.params.id)
    .then((item) => res.status(200).json(item))
    .catch((err) => console.log(err));
});

router.post("/shoppingcart", (req, res) => {
  const cartItems = req.body;
  const promise1 = cartItems.map((item) =>
    Item.find({ _id: { $in: [mongoose.Types.ObjectId(item)] } })
      .then((res) => res)
      .catch((err) => err)
  );

  Promise.all(promise1)
      .then((item) => res.status(200).json(item))
      .catch((err) => console.log(err));
});

module.exports = router;
