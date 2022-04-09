import mongoose from "mongoose";
const { Schema } = mongoose;
// const categories = ["Groceries", "Vegetarian", "Meals", "Bread & Pastries"];
const basketSchema = new Schema(
  {
    name: {
      type: String,
      enum: [
        "Breakfast basket",
        "Lunch basket",
        "Dinner basket",
        "Surprise basket",
        "Pastries basket",
      ],
      required: [true, "Please choose the basket name"],
    },
    price: {
      original: { type: Number, required: true },
      discount: { type: Number, required: true },
    },
    categories: [String],
    quantity: { type: Number, required: true },
    description: { type: String, required: true },
    pickup: {
      from: { type: String, required: true },
      to: { type: String, required: true },
    },
    image: { type: String },

    shop_id: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
      ref: "Shop",
    },

    owner_id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

basketSchema.methods.decrease = function () {
  this.quantity = this.quantity > 0 ? this.quantity - 1 : (this.quantity = 0);
  return this.save();
};
export default mongoose.model("Basket", basketSchema);
