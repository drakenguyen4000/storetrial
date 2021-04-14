const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  user_id: {
    type: String,
  },
  items_ordered: {
    type: [],
    required: true,
  },
  // shipping_cost: {
  //   type: String,
  //   required: true,
  // },
  // tax: {
  //   type: String,
  //   required: true,
  // },
  total_cost: {
    type: Number,
    required: true,
  },
  purchase_date: {
    type: Date,
    default: Date.now,
  },
  // estimated_delivery: {
  //   type: String,
  //   required: true,
  // },
});

module.exports = Order = mongoose.model("order", OrderSchema);
