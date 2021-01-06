//seeds.js
const item = require("./models/Item");

const data = [
  {
    brand: "Lucky Brands",
    image: "https://unsplash.com/photos/oAEzX2CgPDQ",
    description: "High Waist Straight Trousers Women Straight Solid Elegant",
    price: "$29.99"
  },
  {
    brand: "L Linen",
    image: "https://unsplash.com/photos/M2pw0BINIWY",
    description: "Chiffon Dresses Short Sleeve Boho Summer Dress 2020 Vintage Plus Size Maxi Sundress Elegant Women Bodycon Party",
    price: "$24.99"
  },
  {
    brand: "Autumn Winter",
    image: "https://unsplash.com/photos/f615lHRUJqw",
    description: "2019 Autumn Winter Geometric Print Vintage Dress Plus Size Midi Dresses Korean Elegant Women Party Long Sleeve",
    price: "$23.99"
  },
];

const seedDB = () => {
  data.forEach((seed) => {
    item.create(seed, (err, item) => {
      if (err) {
        console.log(err);
      } else {
        console.log("added a item");
      }
    });
  });
};

//export seedDB funciton
module.exports = seedDB;
