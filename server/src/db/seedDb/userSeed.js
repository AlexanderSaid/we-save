import mongoose from "mongoose";
import User from "../../models/Users.js";
import { faker } from "@faker-js/faker";
faker.setLocale("nl");

mongoose.connect(
  "mongodb+srv://c34candc:GfzMj4ZFqnkxGeR8@cluster0.pmphz.mongodb.net/devDatabase?retryWrites=true&w=majority"
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("Database connected");
});

const localZipCodes = [
  "1013AK",
  "1013AP",
  "1013BG",
  "1014AG",
  "1018AM",
  "1018KZ",
  "1018LG",
  "1019TK",
  "1019VC",
  "1019VT",
  "1022LD",
  "1022WV",
  "1023BX",
  "1098SJ",
  "1083HP",
  "1019BW",
  "1025WK",
  "1061AE",
  "1061MJ",
  "1055AA",
];

const userSeed = async () => {
  await User.deleteMany({});
  for (let i = 0; i < 10; i++) {
    await User.create({
      name: {
        first: faker.name.firstName(),
        last: faker.name.lastName(),
      },
      email: faker.internet.email(),
      password: faker.internet.password(),
      role: [
        {
          is_admin: faker.datatype.boolean(),
          is_owner: faker.datatype.boolean(),
          is_customer: true,
        },
      ],
      postcode: localZipCodes[Math.floor(Math.random() * 20)],
      favorites_shops: ["6239d98016ce4b23701bdd22"],
    });
  }
};
userSeed().then(() => {
  mongoose.connection.close();
});
