const express = require("express"),
  mongoose = require("mongoose"),
  router = express.Router(),
  auth = require("../../middleware/auth");

//environment variables
require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE);
const { v4: uuidv4 } = require("uuid");

//Item Model
const Item = require("../../models/Item");
const Order = require("../../models/Order");

//Checkout
router.post("/eapparel/checkout", async (req, res) => {
  let error;
  let status;
  try {
    const { order, token } = req.body;
    //Create a customer profile on Stripe
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    //Unique key to make sure the customer isn't charged twice.
    const idempotencyKey = uuidv4();
    //Return success or failure status
    const charge = await stripe.charges.create(
      {
        amount: Math.round(order.salesTotal * 100),
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
        description: `Purchased ${order.description}`,
        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            line2: token.card.address_line2,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip,
          },
        },
      },
      { idempotencyKey }
    );
    status = "Payment success!";
  } catch (error) {
    status = "Payment failed!";
  }

  if (status === "Payment success!") {
    const newOrder = new Order({
      user_id: req.body.order.user_id,
      items_ordered: req.body.order.items_ordered,
      total_cost: req.body.order.salesTotal,
    });
    newOrder
      .save()
      .then((data) => {
        //Saved order success
        res.status(200).json({ data, status });
      })
      .catch((err) => {
        //Saved order failed
        res.status(400).json(err);
      });
  } else {
    //payment failed
    res.json({ error, status });
  }
});

//Get Order History
router.get("/eapparel/orderhistory/:id", (req, res) => {
  const filter = req.params.id;
  Order.find({"user_id": filter})
    .then((orders) => res.status(200).json(orders))
    .catch((err) => console.log(err));
});

//List Items
router.get("/eapparel/:category", (req, res) => {
  Item.find()
    //-1 is sort by descending
    .sort({ date: -1 })
    .then((items) => res.status(200).json(items))
    .catch((err) => res.status(404).json(err));
});

//Show Item Details
router.get("/eapparel/:category/:id", (req, res) => {
  Item.findById(req.params.id)
    .then((item) => res.status(200).json(item))
    .catch((err) => res.status(404).json(err));
});

module.exports = router;