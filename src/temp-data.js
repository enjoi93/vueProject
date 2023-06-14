/* This is a basic sheet of products to be exported to ProductsList.vue */

import sx180 from "./assets/180sx.png";
import ferrari from "./assets/ferrari.png";
import gtr from "./assets/gtr.png";
import hondaCivic from "./assets/hondaCivicSlammed.png";
import s13 from "./assets/s13.png";
import subaru from "./assets/subaruslammed.png";

export const cartItems = [
  {
    id: "123",
    name: "180sx",
    price: "$45,000.00",
    imageName: sx180
  },
  {
    id: "234",
    name: "ferrari",
    price: "$224,500.00",
    imageName: ferrari
  },
  {
    id: "345",
    name: "gtr",
    price: "$78,000.00",
    imageName: gtr
  }
];

export const products = [
  {
    id: "123",
    name: "180sx",
    price: "$45,000.00",
    imageName: sx180
  },
  {
    id: "234",
    name: "Ferrari",
    price: "$224,500.00",
    imageName: ferrari
  },
  {
    id: "345",
    name: "GT-R",
    price: "$78,000.00",
    imageName: gtr
  },
  {
    id: "456",
    name: "Honda Civic",
    price: "Just take it",
    imageName: hondaCivic
  },
  {
    id: "567",
    name: "s13",
    price: "$42,500.00",
    imageName: s13
  },
  {
    id: "678",
    name: "BRZ",
    price: "$5.50 if you can find a head gasket",
    imageName: subaru
  }
];
