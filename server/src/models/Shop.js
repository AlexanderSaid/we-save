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
      addition: {
        type: String,
      },
      postcode: {
        type: String,
        required: true,
      },
      lat: Number,
      lon: Number,
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
    description: {
      type: String,
    },
    owner_id: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
    baskets: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Basket" }],
  },
  { timestamps: true }
);

export default mongoose.model("Shop", shopSchema);
