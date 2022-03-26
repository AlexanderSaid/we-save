import mongoose from "mongoose";
import Basket from "../../models/Basket.js";
import dotenv from "dotenv";
import { faker } from "@faker-js/faker";

dotenv.config({ path: "../../../.env" });
mongoose.connect(process.env.MONGODB_URL);

const randomName = () => {
  const names = [
    "Breakfast basket",
    "Lunch basket",
    "Dinner basket",
    "Surprise basket",
    "Pastries basket",
  ];
  return names[Math.floor(Math.random() * names.length)];
};
const randomCategory = () => {
  const categories = [
    "Meals",
    "Bread & Pastries",
    "Groceries",
    "Vegetarian",
    "Diary & Meat",
  ];
  return categories[Math.floor(Math.random() * categories.length)];
};

const ids = [
  "5ca4bbc7a2dd94ee58162392",
  "5ca4bbc7a2dd94ee58162396",
  "5ca4bbc7a2dd94ee581623b8",
  "5ca4bbc7a2dd94ee581623a4",
  "5ca4bbc7a2dd94ee581623bc",
  "5ca4bbc7a2dd94ee581623d1",
  "5ca4bbc7a2dd94ee581623da",
  "5ca4bbc7a2dd94ee581623de",
  "5ca4bbc7a2dd94ee581623e5",
  "5ca4bbc7a2dd94ee581623e6",
  "5ca4bbc7a2dd94ee581623e7",
  "5ca4bbc7a2dd94ee581623e8",
];

const seedDb = async () => {
  await Basket.deleteMany({});
  for (let i = 0; i < 10; i++) {
    await Basket.create({
      _id: ids[i],
      name: randomName(),
      price: {
        original: 12,
        discount: 5,
      },
      categories: [randomCategory()],
      quantity: 2,
      description: faker.lorem.sentences(2),
      pickup: {
        from: new Date(),
        to: new Date(),
      },
      image: faker.image.food(),
      // shop_id: ObjectId('80980988dafdfdsd'),
    });
  }
};

seedDb().then(() => {
  mongoose.connection.close();
});
