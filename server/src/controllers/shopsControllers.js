import Shop from "../models/Shop.js";
// import Basket from "../models/Basket.js";
import asyncHandler from "express-async-handler";

//@des Get a single Shop
//@route GET /api/shops/:id
//@access public

const getSingleShop = asyncHandler(async (req, res) => {
  const { id } = req.params;
  //get shop
  const shop = await Shop.findById(id).populate("baskets");
  if (!shop) {
    res.status(401).json({ msg: "Shop not found" });
  }
  res.status(200).json({ success: true, result: shop });
});

//@des Get all Shop
//@route GET /api/shops
//@access public
const getAllShops = asyncHandler(async (req, res) => {
  const shops = await Shop.find({}).populate("baskets");
  if (!shops) {
    res.status(401);
    res.status(401).json({ msg: "there are no shops" });
  }
  res.status(201).json({ success: true, result: shops });
});

export { getAllShops, getSingleShop };
