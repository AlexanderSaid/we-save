import asyncHandler from "express-async-handler";
import Basket from "../models/Basket.js";
import User from "../models/User.js";
import Shop from "../models/Shop.js";
import cloudinary from "../utils/cloudinary.js";

//@des Get all the Baskets
//@route GET /api/baskets
//@access Public
const getBaskets = asyncHandler(async (req, res) => {
  const baskets = await Basket.find({}).populate("shop_id", [
    "name",
    "address",
  ]);
  if (!baskets) {
    res.status(400).json({ msg: "There is no baskets" });
  }
  res.status(200).json({ success: true, result: baskets });
});

//@des Get a specific Basket
//@route GET /api/baskets/:basketId
//@access Public
const getOneBasket = asyncHandler(async (req, res) => {
  const { basketId } = req.params;
  const basket = await Basket.findById(basketId).populate("shop_id", [
    "name",
    "address",
  ]);
  if (!basket) {
    res.status(400).json({ msg: "Basket not found" });
  }
  res.status(200).json({ success: true, result: basket });
});

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
  if (
    !name ||
    !original ||
    !discount ||
    !categories ||
    !quantity ||
    !from ||
    !to
  ) {
    res.status(400).json({ msg: "Please fill all the fields" });
  }
  //- Uploading Image
  let uploadedResponse;
  if (image) {
    uploadedResponse = await cloudinary.uploader.upload(image, {
      upload_preset: "dev_setups",
    });
    if (!uploadedResponse) {
      res
        .status(401)
        .json({ msg: "Something went wrong with uploading the image" });
    }
  } else {
    uploadedResponse = "";
  }

  const price = { original, discount };
  const pickup = { from, to };
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
    image: uploadedResponse?.url,
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

//@des Edit a basket from a specific shop
//@route PUT /api/shops/:shopId/baskets/:basketId
//@access Private
const updateBasket = asyncHandler(async (req, res) => {
  const { shopId, basketId } = req.params;
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401).json({ msg: "User not found" });
  }
  const shop = await Shop.findById(shopId);
  if (shop.owner_id.toString() !== req.user.id) {
    res.status(401).json("User not Authorized");
  }
  // - Uploading Image
  let uploadedResponse;
  if (req.body.image) {
    uploadedResponse = await cloudinary.uploader.upload(req.body.image, {
      upload_preset: "dev_setups",
    });
    if (!uploadedResponse) {
      res
        .status(401)
        .json({ msg: "Something went wrong with uploading the image" });
    }
  } else {
    uploadedResponse = "";
  }
  const basketToUpdate = await Basket.findByIdAndUpdate(basketId, req.body);
  if (
    basketToUpdate.shop_id.toString() !== shop._id.toString() &&
    basketToUpdate.owner_id.toString() !== req.user.id
  ) {
    res.status(401).json({ msg: "This basket doesn't belong to this shop" });
  }

  res.status(200).json({ success: true, result: basketToUpdate });
});

//@des decrease the quantity of baskets from a specific shop
//@route GET /api/baskets/:basketId/decrease
//@access Private
const decreaseQuantity = asyncHandler(async (req, res) => {
  const { basketId } = req.params;
  const basket = await Basket.findById(basketId);
  if (!basket) {
    res.status(401).json({ msg: "This basket is not found" });
  }
  await basket.decrease();
  res.status(200).json({ success: true, result: basket });
});

export {
  getShopBaskets,
  createShopBasket,
  deleteBasket,
  decreaseQuantity,
  getBaskets,
  getOneBasket,
  updateBasket,
  // uploadImage,
};
