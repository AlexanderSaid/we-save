import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      first: {
        type: String,
        required: true,
      },
      last: {
        type: String,
        required: true,
      },
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      min: [6, "Too short password"],
    },
    is_admin: {
      type: Boolean,
      default: false,
    },
    is_owner: {
      type: Boolean,
      default: false,
    },
    is_customer: {
      type: Boolean,
      default: true,
    },
    postcode: {
      type: String,
    },
    shop_id: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Shop",
      },
    ],
    favorites_shops: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Shop" }],
    // shop_id: { type: mongoose.SchemaTypes.ObjectId, ref: "Shop" },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
