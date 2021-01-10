//seeds.js
const item = require("./models/Item");

const data = [
  {
    brand: "Lucky Brands",
    image:
      "https://images.unsplash.com/photo-1547637916-48ceb6f8d505?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMDc0NzJ8MHwxfGFsbHx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080",
    description: "High Waist Straight Trousers Women Straight Solid Elegant",
    price: "$29.99",
  },
  {
    brand: "L Linen",
    image:
      "https://images.unsplash.com/photo-1589173239067-1c7ee83112b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMDc0NzJ8MHwxfGFsbHx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080",
    description:
      "Chiffon Dresses Short Sleeve Boho Summer Dress 2020 Vintage Plus Size Maxi Sundress Elegant Women Bodycon Party",
    price: "$24.99",
  },
  {
    brand: "Autumn Winter",
    image:
      "https://images.unsplash.com/photo-1592669241067-2f92a1048085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMDc0NzJ8MHwxfGFsbHx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080",
    description:
      "2019 Autumn Winter Geometric Print Vintage Dress Plus Size Midi Dresses Korean Elegant Women Party Long Sleeve",
    price: "$23.99",
  },
  {
    brand: "Lucky Brands",
    image:
      "https://images.unsplash.com/photo-1547637916-48ceb6f8d505?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMDc0NzJ8MHwxfGFsbHx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080",
    description: "High Waist Straight Trousers Women Straight Solid Elegant",
    price: "$29.99",
  },
  {
    brand: "L Linen",
    image:
      "https://images.unsplash.com/photo-1589173239067-1c7ee83112b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMDc0NzJ8MHwxfGFsbHx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080",
    description:
      "Chiffon Dresses Short Sleeve Boho Summer Dress 2020 Vintage Plus Size Maxi Sundress Elegant Women Bodycon Party",
    price: "$24.99",
  },
  {
    brand: "Autumn Winter",
    image:
      "https://images.unsplash.com/photo-1592669241067-2f92a1048085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMDc0NzJ8MHwxfGFsbHx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080",
    description:
      "2019 Autumn Winter Geometric Print Vintage Dress Plus Size Midi Dresses Korean Elegant Women Party Long Sleeve",
    price: "$23.99",
  },
  {
    brand: "Lucky Brands",
    image:
      "https://images.unsplash.com/photo-1547637916-48ceb6f8d505?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMDc0NzJ8MHwxfGFsbHx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080",
    description: "High Waist Straight Trousers Women Straight Solid Elegant",
    price: "$29.99",
  },
  {
    brand: "L Linen",
    image:
      "https://images.unsplash.com/photo-1589173239067-1c7ee83112b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMDc0NzJ8MHwxfGFsbHx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080",
    description:
      "Chiffon Dresses Short Sleeve Boho Summer Dress 2020 Vintage Plus Size Maxi Sundress Elegant Women Bodycon Party",
    price: "$24.99",
  },
  {
    brand: "Autumn Winter",
    image:
      "https://images.unsplash.com/photo-1592669241067-2f92a1048085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMDc0NzJ8MHwxfGFsbHx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080",
    description:
      "2019 Autumn Winter Geometric Print Vintage Dress Plus Size Midi Dresses Korean Elegant Women Party Long Sleeve",
    price: "$23.99",
  },
];

const seedDB = () => {
  item.deleteMany({}, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("deleted items");
      data.forEach((seed) => {
        item.create(seed, (err, item) => {
          if (err) {
            console.log(err);
          } else {
            console.log("added a item");
          }
        });
      });
    }
  });
};

//export seedDB funciton
module.exports = seedDB;
