import asyncHandler from "express-async-handler";
import Basket from "../models/Basket.js";
import User from "../models/User.js";
import Shop from "../models/Shop.js";

//@des Get the Baskets of a specific shop
//@route GET /api/shops/:shopId/baskets
//@access Private
const getShopBaskets = asyncHandler(async (req, res) => {
  const { shopId } = req.params;
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401).json({ msg: "User not Found" });
  }

  const shop = await Shop.findById(shopId);
  if (shop.owner_id.toString() !== req.user.id) {
    res.status(401).json({ msg: "User not Authorized" });
  }
  const baskets = await Basket.find({ shop_id: shopId });
  res.status(200).json({ success: true, result: baskets });
});

//@des Create a basket for a specific shop
//@route POST /api/shops/:shopId/baskets
//@access Private
const createShopBasket = asyncHandler(async (req, res) => {
  const { shopId } = req.params;
  const {
    name,
    original,
    discount,
    categories,
    quantity,
    description,
    from,
    to,
    image,
  } = req.body;

  const price = { original, discount };
  const pickup = { from, to };
  // if (original <= discount) {
  //   res
  //     .status(401)
  //     .json({ msg: 'Original price cant be less than the discount' })
  // }
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401).json({ msg: "User not found" });
  }
  const shop = await Shop.findById(shopId);
  if (shop.owner_id.toString() !== req.user.id) {
    res.status(401).json("User not Authorized");
  }
  const newBasket = await Basket.create({
    name,
    price,
    categories,
    quantity,
    description,
    pickup,
    image,
    owner_id: req.user.id,
    shop_id: shopId,
  });
  if (!newBasket) {
    res.status(401).json({ msg: "Something Went Wrong" });
  }
  shop.baskets.push(newBasket._id.toString());
  await shop.save();
  res.status(201).json({ success: true, result: newBasket });
});

//@des Delete a basket from a specific shop
//@route DELETE /api/shops/:shopId/baskets/:basketId
//@access Private
const deleteBasket = asyncHandler(async (req, res) => {
  const { shopId, basketId } = req.params;
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401).json({ msg: "User not found" });
  }
  const shop = await Shop.findById(shopId);
  if (shop.owner_id.toString() !== req.user.id) {
    res.status(401).json("User not Authorized");
  }
  const basket = await Basket.findById(basketId);
  if (
    basket.shop_id.toString() !== shop._id.toString() &&
    basket.owner_id.toString() !== req.user.id
  ) {
    res.status(401).json({ msg: "This basket doesn't belong to this shop" });
  }
  const newBaskets = shop.baskets.filter(
    (bas) => bas._id.toString() !== basket._id.toString()
  );
  shop.baskets = newBaskets;
  await shop.save();
  await basket.remove();
  res
    .status(200)
    .json({ success: true, result: "Your basket was successfully deleted" });
});

export { getShopBaskets, createShopBasket, deleteBasket };
