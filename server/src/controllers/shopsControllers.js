import Shop from "../models/Shop.js";
import Basket from "../models/Basket.js";
import asyncHandler from "express-async-handler";

const getAllShops = asyncHandler(async (req, res) => {
  const shops = await Shop.find({}).populate("baskets");
  if (!shops) {
    res.status(401).json({ message: "there are no shops" });
  }
  res.status(201).json(shops);
});

export { getAllShops };
