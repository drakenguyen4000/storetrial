//seeds.js
const item = require("./models/Item");

const data = [
  {
    brand: "Lucky Brands",
    image:
      "https://images.unsplash.com/photo-1547637916-48ceb6f8d505?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMDc0NzJ8MHwxfGFsbHx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080",
    quantity: 0,
    category: "women",
    description: "High Waist Straight Trousers Women Straight Solid Elegant",
    price: 29.99,
  },
  {
    brand: "L Linen",
    image:
      "https://images.unsplash.com/photo-1589173239067-1c7ee83112b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMDc0NzJ8MHwxfGFsbHx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080",
      quantity: 0,
      category: "women",
    description:
      "Chiffon Dresses Short Sleeve Boho Summer Dress 2020 Vintage Plus Size Maxi Sundress Elegant Women Bodycon Party",
    price: 24.99,
  },
  {
    brand: "Autumn Winter",
    image:
      "https://images.unsplash.com/photo-1592669241067-2f92a1048085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMDc0NzJ8MHwxfGFsbHx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080",
      quantity: 0,
      category: "women",
    description:
      "2021 Autumn Winter Geometric Print Vintage Dress Plus Size Midi Dresses Korean Elegant Women Party Long Sleeve",
    price: 23.99,
  },
  {
    brand: "School Attire",
    image:
      "https://images.unsplash.com/photo-1481214110143-ed630356e1bb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80&w=1080",
      quantity: 0,
      category: "women",
    description: "High Waist Straight Trousers Women Straight Solid Elegant",
    price: 25.99,
  },
  {
    brand: "L Linen",
    image:
      "https://images.unsplash.com/photo-1589173239067-1c7ee83112b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMDc0NzJ8MHwxfGFsbHx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080",
      quantity: 0,
      category: "women",
    description:
      "Chiffon Dresses Short Sleeve Boho Summer Dress 2020 Vintage Plus Size Maxi Sundress Elegant Women Bodycon Party",
    price: 24.99,
  },
  {
    brand: "Autumn Winter",
    image:
      "https://images.unsplash.com/photo-1592669241067-2f92a1048085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMDc0NzJ8MHwxfGFsbHx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080",
      quantity: 0,
      category: "women",
    description:
      "2021 Autumn Winter Geometric Print Vintage Dress Plus Size Midi Dresses Korean Elegant Women Party Long Sleeve",
    price: 23.99,
  },
  {
    brand: "Lucky Brands",
    image:
      "https://images.unsplash.com/photo-1547637916-48ceb6f8d505?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMDc0NzJ8MHwxfGFsbHx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080",
      quantity: 0,
      category: "women",
    description: "High Waist Straight Trousers Women Straight Solid Elegant",
    price: 29.99,
  },
  {
    brand: "L Linen",
    image:
      "https://images.unsplash.com/photo-1589173239067-1c7ee83112b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMDc0NzJ8MHwxfGFsbHx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080",
      quantity: 0,
      category: "women",
    description:
      "Chiffon Dresses Short Sleeve Boho Summer Dress 2020 Vintage Plus Size Maxi Sundress Elegant Women Bodycon Party",
    price: 24.99,
  },
  {
    brand: "Autumn Winter",
    image:
      "https://images.unsplash.com/photo-1592669241067-2f92a1048085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMDc0NzJ8MHwxfGFsbHx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080",
      quantity: 0,
      category: "women",
    description:
      "2021 Autumn Winter Geometric Print Vintage Dress Plus Size Midi Dresses Korean Elegant Women Party Long Sleeve",
    price: 23.99,
  },
  {
    brand: "Spring Forward",
    image:
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=722&q=80&w=1080",
      quantity: 0,
      category: "girls",
    description:
      "2021 Spring Forward Geometric Print Vintage Dress Plus Size Midi Dresses Korean Elegant Women Party Long Sleeve",
    price: 21.99,
  },
  {
    brand: "Spring Break",
    image:
      "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80&w=1080",
      quantity: 0,
      category: "girls",
    description:
      "2021 Autumn Winter Geometric Print Vintage Dress Plus Size Midi Dresses Korean Elegant Women Party Long Sleeve",
    price: 14.99,
  },
  {
    brand: "Spring Forward",
    image:
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=722&q=80&w=1080",
      quantity: 0,
      category: "girls",
    description:
      "2021 Spring Forward Geometric Print Vintage Dress Plus Size Midi Dresses Korean Elegant Women Party Long Sleeve",
    price: 21.99,
  },
  {
    brand: "Spring Break",
    image:
      "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80&w=1080",
      quantity: 0,
      category: "girls",
    description:
      "2021 Autumn Winter Geometric Print Vintage Dress Plus Size Midi Dresses Korean Elegant Women Party Long Sleeve",
    price: 14.99,
  },
  {
    brand: "Spring Forward",
    image:
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=722&q=80&w=1080",
      quantity: 0,
      category: "girls",
    description:
      "2021 Spring Forward Geometric Print Vintage Dress Plus Size Midi Dresses Korean Elegant Women Party Long Sleeve",
    price: 21.99,
  },
  {
    brand: "Spring Break",
    image:
      "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80&w=1080",
      quantity: 0,
      category: "girls",
    description:
      "2021 Autumn Winter Geometric Print Vintage Dress Plus Size Midi Dresses Korean Elegant Women Party Long Sleeve",
    price: 14.99,
  },
  {
    brand: "Spring Sports",
    image:
      "https://images.unsplash.com/photo-1526377242861-e4d7afe69623?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=746&q=80&w=1080",
      quantity: 0,
      category: "boys",
    description:
      "2021 Spring Sports Geometric Print Vintage Jacket Plus Size Midi Dresses Korean Elegant Women Party Long Sleeve",
    price: 14.99,
  },
  {
    brand: "Spring Sports",
    image:
      "https://images.unsplash.com/photo-1526377242861-e4d7afe69623?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=746&q=80&w=1080",
      quantity: 0,
      category: "boys",
    description:
      "2021 Spring Sports Geometric Print Vintage Jacket Plus Size Midi Dresses Korean Elegant Women Party Long Sleeve",
    price: 14.99,
  },
  {
    brand: "Spring Sports",
    image:
      "https://images.unsplash.com/photo-1526377242861-e4d7afe69623?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=746&q=80&w=1080",
      quantity: 0,
      category: "boys",
    description:
      "2021 Spring Sports Geometric Print Vintage Jacket Plus Size Midi Dresses Korean Elegant Women Party Long Sleeve",
    price: 14.99,
  },
  {
    brand: "Spring Sports",
    image:
      "https://images.unsplash.com/photo-1526377242861-e4d7afe69623?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=746&q=80&w=1080",
      quantity: 0,
      category: "boys",
    description:
      "2021 Spring Sports Geometric Print Vintage Jacket Plus Size Midi Dresses Korean Elegant Women Party Long Sleeve",
    price: 14.99,
  },
  {
    brand: "Spring Sports",
    image:
      "https://images.unsplash.com/photo-1526377242861-e4d7afe69623?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=746&q=80&w=1080",
      quantity: 0,
      category: "boys",
    description:
      "2021 Spring Sports Geometric Print Vintage Jacket Plus Size Midi Dresses Korean Elegant Women Party Long Sleeve",
    price: 14.99,
  },
  {
    brand: "Spring Sports",
    image:
      "https://images.unsplash.com/photo-1526377242861-e4d7afe69623?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=746&q=80&w=1080",
      quantity: 0,
      category: "boys",
    description:
      "2021 Spring Sports Geometric Print Vintage Jacket Plus Size Midi Dresses Korean Elegant Women Party Long Sleeve",
    price: 14.99,
  },
  {
    brand: "Spring Sports",
    image:
      "https://images.unsplash.com/photo-1526377242861-e4d7afe69623?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=746&q=80&w=1080",
      quantity: 0,
      category: "boys",
    description:
      "2021 Spring Sports Geometric Print Vintage Jacket Plus Size Midi Dresses Korean Elegant Women Party Long Sleeve",
    price: 14.99,
  },
  {
    brand: "Test Summer Wear",
    image:
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80&w=1080",
      quantity: 0,
      category: "men",
    description:
      "2021 Spring Sports Geometric Print Vintage Jacket Plus Size Midi Dresses Korean Elegant Women Party Long Sleeve",
    price: 25.99,
  },
  {
    brand: "Summer Wear",
    image:
      "https://images.unsplash.com/photo-1588635631677-ea547542d60c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80&w=1080",
      quantity: 0,
      category: "men",
    description:
      "2021 Summer Geometric Print Vintage Pants",
    price: 25.99,
  },
  {
    brand: "Motor Bike Wear",
    image:
      "https://images.unsplash.com/photo-1541119370235-6c11470cfb1e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80&w=1080",
      quantity: 0,
      category: "men",
    description:
      "2021 Black Vintage Motor Bike Jacket",
    price: 49.99,
  },
  {
    brand: "Summer Wear",
    image:
      "https://images.unsplash.com/photo-1588635631677-ea547542d60c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80&w=1080",
      quantity: 0,
      category: "men",
    description:
      "2021 Summer Geometric Print Vintage Pants",
    price: 25.99,
  },
  {
    brand: "Summer Wear",
    image:
      "https://images.unsplash.com/photo-1588635631677-ea547542d60c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80&w=1080",
      quantity: 0,
      category: "men",
    description:
      "2021 Summer Geometric Print Vintage Pants",
    price: 25.99,
  },
  {
    brand: "Summer Wear",
    image:
      "https://images.unsplash.com/photo-1588635631677-ea547542d60c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80&w=1080",
      quantity: 0,
      category: "men",
    description:
      "2021 Summer Geometric Print Vintage Pants",
    price: 25.99,
  },
  {
    brand: "Summer Wear",
    image:
      "https://images.unsplash.com/photo-1588635631677-ea547542d60c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80&w=1080",
      quantity: 0,
      category: "men",
    description:
      "2021 Summer Geometric Print Vintage Pants",
    price: 25.99,
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
