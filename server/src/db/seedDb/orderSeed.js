import mongoose from "mongoose";
import Order from "../../models/Order.js";
import { faker } from "@faker-js/faker";
mongoose.connect(process.env.MONGODB_URL);

const orderSeed = async () => {
  await Order.deleteMany({});
  for (let i = 0; i < 10; i++) {
    await Order.create({
      baskets: ["6239d98016ce4b23701bdd22"],
      price: faker.commerce.price(),
      isPaid: faker.datatype.boolean(),
    });
  }
};

orderSeed().then(() => {
  mongoose.connection.close();
});
