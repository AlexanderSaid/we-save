import mongoose from "mongoose";
const { Schema } = mongoose;

const shopSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    address: {
      street: {
        type: String,
        required: true,
      },
      house: {
        type: Number,
        required: true,
      },
      addition: String,
      postcode: {
        type: String,
        required: true,
      },
      city: String,
      country: String,
      lat: Number,
      lon: Number,
    },
    phone: {
      type: String,
      required: true,
    },
    email: String,
    kvk: {
      type: String,
      required: true,
    },
    iban: String,
    image: String,
    logo: String,
    description: String,
    owner_id: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
    baskets: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Basket" }],
  },
  { timestamps: true }
);

export default mongoose.model("Shop", shopSchema);
