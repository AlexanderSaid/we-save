import mongoose from "mongoose";
const Schema = mongoose.Schema;

const shopSchema = new Schema(
  {
    shop_name: {
      type: String,
      required: true,
    },

    address: {
      street_name: {
        type: String,
        required: true,
      },
      house_number: {
        type: Number,
        required: true,
      },
      addition: {
        type: String,
      },
      post_code: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
    kvk: {
      type: String,
      required: true,
    },
    iban: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
    },
    description: {
      type: String,
    },
    owner_id: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
    baskets: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Basket" }],
  },
  { timestamps: true }
);

export const shop = mongoose.model("Shop", shopSchema);
