import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
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
    min: 8,
  },
  role: [
    {
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
    },
  ],
  post_code: {
    type: String,
  },
  favorites_shops: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Shop" }],
  shopId: { type: mongoose.SchemaTypes.ObjectId, ref: "Shop" },
});

export const user = mongoose.model("User", userSchema);
