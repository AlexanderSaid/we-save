import mongoose from "mongoose";
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    user_id: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
    baskets: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Basket" }],
    price: {
      type: Number,
    },
    is_paid: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const order = mongoose.model("Order", orderSchema);
