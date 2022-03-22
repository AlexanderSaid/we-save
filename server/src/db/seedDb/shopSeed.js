import mongoose from "mongoose";
import Shop from "../../models/Shop.js";
import { faker } from "@faker-js/faker";
mongoose.connect(
  "mongodb+srv://c34candc:GfzMj4ZFqnkxGeR8@cluster0.pmphz.mongodb.net/devDatabase?retryWrites=true&w=majority"
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("Database connected");
});

const seedDb = async () => {
  await Shop.deleteMany({});
  for (let i = 0; i < 10; i++) {
    await Shop.create({
      name: "Albert hein",
      address: {
        street: "javastraat",
        house: 26,
        addition: "E",
        postcode: "1098XH",
        city: "Amsterdam",
        country: "Holland",
      },
      phone: "061111111",
      email: "shop@gmail.com",
      kvk: "123456",
      iban: "nl88ingb09190000",
      description: "this is test shop",
      baskets: ["6239d98016ce4b23701bdd22"],
      image: faker.image.avatar(),
    });
  }
};

seedDb().then(() => {
  mongoose.connection.close();
});
