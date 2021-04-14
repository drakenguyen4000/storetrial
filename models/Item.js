const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const ItemSchema = new Schema({
  brand: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    // image: String,
    // imageId: String,
  },
  category: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  // summary: {
  //   type: String,
  //   required: true,
  // },
  price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

//Map schema in mongoose model and export as Item
module.exports = Item = mongoose.model("item", ItemSchema);
