import mongoose from "mongoose";
import Basket from "../../models/Basket.js";
// import dotenv from "dotenv";
import connectDB from "../connectDB";

connectDB();
// dotenv.config({ path: "../../../.env" });
// mongoose.connect(process.env.MONGODB_URL);

const seedDb = async () => {
  await Basket.deleteMany({});
  for (let i = 0; i < 10; i++) {
    await Basket.create({
      shop_name: "Breakfast basket",
      price: {
        original: 12,
        discount: 5,
      },
      categories: ["Groceries", "Vegetarian"],
      quantity: 2,
      description: "the are jslkfj a; aflk jad ",
      pickup: {
        from: new Date(),
        to: new Date(),
      },
      image:
        "https:images.unsplash.com/photo-1605784303386-f135539a0532?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      // shop_id: ObjectId('80980988dafdfdsd'),
    });
  }
};

seedDb().then(() => {
  mongoose.connection.close();
});
