//seeds.js
const item = require("./models/Item");

const data = [
  {
    title: "Belted High Waist Pants",
    image:
      "https://images.unsplash.com/photo-1547637916-48ceb6f8d505?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMDc0NzJ8MHwxfGFsbHx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080",
    quantity: 0,
    category: "women",
    description:
      "A tie belt provides a polished finish for workday-essential pants fashioned with a high waist and wide legs.",
    price: 29.99,
  },
  {
    title: "Ruffle Midi Dress",
    image:
      "https://images.unsplash.com/photo-1589173239067-1c7ee83112b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMDc0NzJ8MHwxfGFsbHx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080",
    quantity: 0,
    category: "women",
    description:
      "Chiffon Dresses Short Sleeve Boho Summer Dress 2020 Vintage Plus Size Maxi Sundress Elegant Women Bodycon Party.",
    price: 36.99,
  },
  {
    title: "Autumn Winter",
    image:
      "https://images.unsplash.com/photo-1592669241067-2f92a1048085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMDc0NzJ8MHwxfGFsbHx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080",
    quantity: 0,
    category: "women",
    description:
      "2021 Autumn Winter Geometric Print Vintage Dress Plus Size Midi Dresses Korean Elegant Women Party Long Sleeve.",
    price: 35.99,
  },
  {
    title: "Linen Blend Camisole",
    image:
      "https://images.unsplash.com/photo-1603316040381-f91e5c9f0e7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80&w=1080",
    quantity: 0,
    category: "women",
    description:
      "55% linen. 45% rayon. Machine wash. Adjustable straps.  This lightweight linen-blend cami is just right for warm weather.",
    price: 21.99,
  },
  {
    title: "Pattern Cotton Midi",
    image:
      "https://images.unsplash.com/photo-1591346544135-50543bdd1f30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80&w=1080",
    quantity: 0,
    category: "women",
    description:
      "Ikat-inspired patterns seem to vibrate as you float in this gauzy cotton dress sweetened by puff sleeves, playful ruffles.",
    price: 32.99,
  },
  {
    title: "Be Free Tunic",
    image:
      "https://images.unsplash.com/photo-1542648870-438579cbd0ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=677&q=80&w=1080",
    quantity: 0,
    category: "women",
    description:
      "2021 Spring Be Free Tunic.  Weathered stripes wind around this tunic cut long and loose for easy, everyday style.",
    price: 29.99,
  },
  {
    title: "Sleeveless Ruffle",
    image:
      "https://images.unsplash.com/photo-1503408024948-0a3e1b2b519c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80&w=1080",
    quantity: 0,
    category: "women",
    description:
      "Make a sweet, shapely impression in this summery sleeveless frock styled with a ruched bodice and a flouncy ruffled hem.",
    price: 37.99,
  },
  {
    title: "Floral Midi Dress",
    image:
      "https://images.unsplash.com/photo-1567189022371-cc754891cdc9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80&w=1080",
    quantity: 0,
    category: "women",
    description:
      "Sleeve volume is turned up per the trend report tied at the waist and set with billowed sleeves, comes through in style.",
    price: 28.99,
  },
  {
    title: "Rib Coverup Jumpsuit",
    image:
      "https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80&w=1080",
    quantity: 0,
    category: "women",
    description:
      "Cover up after a swim in this softly ribbed jumpsuit topped with adjustable tie shoulders and punctuated with cool cropped legs.",
    price: 39.99,
  },
  {
    title: "Floral Print Flare",
    image:
      "https://images.unsplash.com/photo-1578679664512-23fa08b10eb5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80&w=1080",
    quantity: 0,
    category: "girls",
    description:
      "A vintage-look floral-print skirt in shiny satin brings plenty of charm to a party dress finished with a glittery waistband.",
    price: 17.99,
  },
  {
    title: "Demim Jumpsuit",
    image:
      "https://images.unsplash.com/photo-1555009393-f20bdb245c4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80&w=1080",
    quantity: 0,
    category: "girls",
    description:
      "3-14 Years Girls jumpsuit & rompers kid bib overalls blue adjustable belts denim color changeable sequin pants.",
    price: 22.99,
  },
  {
    title: "Striped Long Sleeve",
    image:
      "https://images.unsplash.com/photo-1532619451280-ce13925789f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80&w=1080",
    quantity: 0,
    category: "girls",
    description:
    "Long sleeve hooded active long sleeve shirt.  Thin fleece lining, ribbed knit cuff and hem keep your little ones warm.",
    price: 21.99,
  },
  {
    title: "Elephant Print",
    image:
      "https://images.unsplash.com/photo-1505067072600-5d7426eb98c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=80&w=1080",
    quantity: 0,
    category: "girls",
    description:
      "Bumeex little girls cotton casual cartoon print short sleeve shirt.  Perfect for a daily wear or many occasions.",
    price: 14.99,
  },
  {
    title: "Minie Mouse",
    image:
      "https://images.unsplash.com/photo-1516697502662-018f15aaca98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80&w=1080",
    quantity: 0,
    category: "girls",
    description:
      "This stylish and comfortable shirt, tag-free neckline for added comfort—because nothing should get in the way of play.",
    price: 21.99,
  },
  {
    title: "Stripe Short Sleeve",
    image:
      "https://images.unsplash.com/photo-1588472235222-0578c263c0a7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80&w=1080",
    quantity: 0,
    category: "girls",
    description:
      "Coordinate it with lightweight cardigan, sweater or jacket. Add some sandals or sneakers for a trendy look!",
    price: 18.99,
  },
  {
    title: "2 Piece",
    image:
      "https://images.unsplash.com/photo-1593026216342-989385b799cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80&w=1080",
    quantity: 0,
    category: "girls",
    description:
      "Toddler girl 2pc ruffle torque waistband skirt sets solid color short sleeve orange a-line clothes set.",
    price: 24.99,
  },
  {
    title: "Long Sleeve Polkadot",
    image:
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=722&q=80&w=1080",
    quantity: 0,
    category: "girls",
    description:
      "Classic round neck, ruffle long sleeve, polka dot printing, easy to match different styles jacket coat or pants/leggings.",
    price: 15.99,
  },
  {
    title: "Future Leader Shirt",
    image:
      "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80&w=1080",
    quantity: 0,
    category: "girls",
    description:
      "Hip and inspirational t-shirt for your special little one! It can be paired with pants, shorts or skirt, material is 100% cotton.",
    price: 14.99,
  },
  {
    title: "4-in-1 Everyday Jacket",
    image:
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80&w=1080",
    quantity: 0,
    category: "boys",
    description:
      "This four-in-one jacket includes a waterproof, hooded shell and zip-out lining that's reversible.",
    price: 25.99,
  },
  {
    title: "Dark Windrunner Sweater",
    image:
      "https://images.unsplash.com/photo-1510255082245-9b3e8e1656f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80&w=1080",
    quantity: 0,
    category: "boys",
    description:
      "Swooshes scattered on an orderly grid energize an inky-black kids' jacket sporting a breathable mesh lining.",
    price: 21.99,
  },
  {
    title: "Kid's Blue Tees",
    image:
      "https://images.unsplash.com/photo-1613144577510-faf2567da706?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80&w=1080",
    quantity: 0,
    category: "boys",
    description:
      "100% cotton.  Getting dressed becomes a whole lot more fun with this cotton tee illustrated in a brightly colored blue tees.",
    price: 14.99,
  },
  {
    title: "Red Bomber Jacket",
    image:
      "https://images.unsplash.com/photo-1467564151038-a705a00e19bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80&w=1080",
    quantity: 0,
    category: "boys",
    description:
      "This all-cotton bomber jacket reverses from classic stripes to stripe-trimmed chambray for a light layering piece.",
    price: 19.99,
  },
  {
    title: "Logo 5",
    image:
      "https://images.unsplash.com/photo-1616232508636-d6b8343713ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80&w=1080",
    quantity: 0,
    category: "boys",
    description:
      "Colorful lightweight, water-resistant windbreaker that will keep your young adventurer comfortable on blustery days.",
    price: 14.99,
  },
  {
    title: "Full Zip Hoodie",
    image:
      "https://images.unsplash.com/photo-1536252107959-9aa5927cc6de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80&w=1080",
    quantity: 0,
    category: "boys",
    description:
      "Once he puts this hoodie on, he may never want to take it off, thanks to a relaxed fit and fleecy interior.",
    price: 14.99,
  },
  {
    title: "Outdoor Adventure",
    image:
      "https://images.unsplash.com/photo-1502810217690-b2aa88e35100?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80&w=1080",
    quantity: 0,
    category: "boys",
    description:
      "A crisp texture pattern defines a smart dress shirt cut from high-quality cotton for exceptional comfort.",
    price: 17.99,
  },
  {
    title: "Houser Button-Up",
    image:
      "https://images.unsplash.com/photo-1529776292731-c2246c65df5a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80&w=1080",
    quantity: 0,
    category: "boys",
    description:
      "Dark with gray sharp grid on this soft button-front cotton oxford shirt he'll be happy wearing even when not scheduled for brunch.",
    price: 17.99,
  },
  {
    title: "Short Sleeve Poplin",
    image:
      "https://images.unsplash.com/photo-1614113075469-6f2decc9ec25?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=624&q=80&w=1080",
    quantity: 0,
    category: "boys",
    description:
      "100% cotton.  This patterned shirt with a patch pocket and breezy short sleeves goes great in any cool kid's closet.",
    price: 14.99,
  },
  {
    title: "Plaid Casual",
    image:
      "https://images.unsplash.com/photo-1612983881270-6de7d8862f11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80&w=1080",
    quantity: 0,
    category: "men",
    description:
      "Turn down collar, inner contrast design shirts/ solid color shirts / long sleeve button dress shirt for fashion men.",
    price: 23.99,
  },
  {
    title: "Hawaiian Short Sleeves",
    image:
      "https://images.unsplash.com/photo-1612540139125-8c408876c81b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80&w=1080",
    quantity: 0,
    category: "men",
    description:
      "Hawaiin Short Sleeves Shirt.  100% Cotton.  Button closure.  Machine Wash.  Hits at hip.  Regular fit.",
    price: 21.99,
  },
  {
    title: "Graphic T-Shirt",
    image:
      "https://images.unsplash.com/photo-1588731247530-4076fc99173e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fG1lbnxlbnwwfDF8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60&w=1080",
    quantity: 0,
    category: "men",
    description:
      "Panther Eblem Men's T-shirt.  98% Cotton.  Button closure.  Hand Wash.  Hits at hip.  Slim fit.",
    price: 15.99,
  },
  {
    title: "Summer Long Sleeves",
    image:
      "https://images.unsplash.com/photo-1588635631677-ea547542d60c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80&w=1080",
    quantity: 0,
    category: "men",
    description:
      "Light Summer Dress Shirt.  100% USA Grown Cotton.  Rib at the neck and self-fabric taping from shoulder to shoulder.",
    price: 22.99,
  },
  {
    title: "Denim Long Sleeve",
    image:
      "https://images.unsplash.com/photo-1526257719984-af5118d67b6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=662&q=80&w=1080",
    quantity: 0,
    category: "men",
    description:
      "2021 Denim Men's Long Sleeve Shirt.  Stylish dress shirt. 98% Cotton.  Button closure.  Hand Wash.  Hits at hip.  Slim fit.",
    price: 42.99,
  },
  {
    title: "White Dress Shirt",
    image:
      "https://images.unsplash.com/flagged/photo-1577996693134-e50d294a665f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80&w=1080",
    quantity: 0,
    category: "men",
    description:
      "Long-sleeve button-up shirt features a spread collar and double-pleated back for a perfect fit with the flex to move with you.",
    price: 19.99,
  },
  {
    title: "Classic Hoodie",
    image:
      "https://images.unsplash.com/photo-1531945086322-64e2ffae14a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80&w=1080",
    quantity: 0,
    category: "men",
    description:
      "Old school classic red hoodie.  100% Cotton.  Button closure.  Machine Wash.  Hits at hip.  Regular fit.  Flexible waistband.",
    price: 25.99,
  },
  {
    title: "Denim Jacket",
    image:
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80&w=1080",
    quantity: 0,
    category: "men",
    description:
      "Vintage Denim Jacket.  Button closure.  Machine Wash.  Hits at hip.  Slim fit.  Adjustable button waistband.",
    price: 45.99,
  },
  {
    title: "Motor Bike Jacket",
    image:
      "https://images.unsplash.com/photo-1541119370235-6c11470cfb1e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80&w=1080",
    quantity: 0,
    category: "men",
    description:
      "2021 Black Motor Bike Jacket.  Button closure.  Machine Wash.  Hits at hip.  Regular fit.  Adjustable button waistband.",
    price: 49.99,
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
