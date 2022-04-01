import mongoose from "mongoose";
import Shop from "../../models/Shop.js";
import { faker } from "@faker-js/faker";
const { Types } = mongoose;

mongoose.connect(process.env.MONGODB_URL);
const addresses = [
  {
    street: "javastraat",
    house: 118,
    addition: "A",
    postcode: "1094HP",
    city: "Amsterdam",
    country: "Netherlands",
    lat: 52.36361237,
    lon: 4.9376362600000006,
  },
  {
    street: "Stuurmankade",
    house: 166,
    addition: "",
    postcode: "1019WC",
    city: "Amsterdam",
    country: "Netherlands",
    lat: 52.37194996363636,
    lon: 4.944373951515152,
  },
  {
    street: "Eerste Oosterparkstraat",
    house: 104,
    addition: "",
    postcode: "1091HE",
    city: "Amsterdam",
    country: "Netherlands",
    lat: 52.35660680217391,
    lon: 4.912427413043477,
  },
  {
    street: "Rembrandtplein",
    house: 38,
    addition: "",
    postcode: "1017CV",
    city: "Amsterdam",
    country: "Netherlands",
    lat: 52.36579464615385,
    lon: 4.896181107692308,
  },
  {
    street: "Koestraat ",
    house: 22,
    addition: "",
    postcode: "1012BX",
    city: "Amsterdam",
    country: "Netherlands",
    lat: 52.37192621562501,
    lon: 4.89855765,
  },
  {
    street: "Korsjespoortsteeg",
    house: 17,
    addition: "",
    postcode: "1015AP",
    city: "Amsterdam",
    country: "Netherlands",
    lat: 52.37726330000001,
    lon: 4.8912558499999985,
  },
  {
    street: "Herengracht",
    house: 90,
    addition: "B",
    postcode: "1015BS",
    city: "Amsterdam",
    country: "Netherlands",
    lat: 52.37654791621623,
    lon: 4.889108610810813,
  },
  {
    street: "Kostverlorenstraat",
    house: 19,
    addition: "A",
    postcode: "1052GT",
    city: "Amsterdam",
    country: "Netherlands",
    lat: 52.37873072173911,
    lon: 4.873498286956521,
  },
  {
    street: "Jan van Galenstraat",
    house: 18,
    addition: "",
    postcode: "1051KM",
    city: "Amsterdam",
    country: "Netherlands",
    lat: 52.3759429137025,
    lon: 4.8670255419043515,
  },
  {
    street: "Akbarstraat",
    house: 61,
    addition: "",
    postcode: "1061DW",
    city: "Amsterdam",
    country: "Netherlands",
    lat: 52.379042625,
    lon: 4.841242925,
  },
  {
    street: "Derkinderenstraat‏",
    house: 107,
    addition: "",
    postcode: "1061VV",
    city: "Amsterdam",
    country: "Netherlands",
    lat: 52.368448,
    lon: 4.840162,
  },
  {
    street: "Josephus Jittastraat",
    house: 38,
    addition: "",
    postcode: "1063NL",
    city: "Amsterdam",
    country: "Netherlands",
    lat: 52.38160062800001,
    lon: 4.815199428000001,
  },
];

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
  await Shop.deleteMany({});
  for (let i = 0; i < 10; i++) {
    await Shop.create({
      name: faker.company.companyName(),
      address: addresses[i],
      phone: faker.phone.phoneNumber(),
      email: faker.internet.email(),
      kvk: "123456",
      iban: faker.finance.iban(),
      description: faker.lorem.sentences(3),
      baskets: [Types.ObjectId(ids[i])],
      image: faker.image.avatar(),
    });
  }
};
seedDb().then(() => {
  mongoose.connection.close();
});
