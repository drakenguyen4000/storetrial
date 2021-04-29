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
  total_cost: {
    type: Number,
    required: true,
  },
  purchase_date: {
    type: Date,
    default: Date.now,
  },
  estimated_delivery: {
    type: String,
    default: new Date(Date.now() + ( 3600 * 1000 * 24 * 5)),
  },
});

module.exports = Order = mongoose.model("order", OrderSchema);
