const express = require("express"),
  mongoose = require("mongoose"),
  router = express.Router();

//Item Model
const Item = require("../../models/Item");
const Order = require("../../models/Order");

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

//Complete Order
router.post("/shoppingcart/completeorder", (req, res) => {
  const newOrder = new Order({
    items_ordered: req.body.items_ordered,
    total_cost: req.body.total_cost,
  });
  newOrder
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

module.exports = router;
