import mongoose from "mongoose";
import Basket from "./Basket.js";
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
    logo: {
      type: String,
    },
    description: {
      type: String,
    },
    owner_id: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
      ref: "User",
    },
    baskets: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Basket",
      },
    ],
  },
  { timestamps: true }
);

shopSchema.post("remove", async function (shop) {
  if (shop.baskets.length) {
    await Basket.deleteMany({ _id: { $in: shop.baskets } });
  }
});
export default mongoose.model("Shop", shopSchema);
