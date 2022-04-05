import Shop from "../models/Shop.js";
// import Basket from "../models/Basket.js";
import asyncHandler from "express-async-handler";
import User from "../models/User.js";
import axios from "axios";
import Basket from "../models/Basket.js";

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

//@des Get a single Shop
//@route GET /api/shops/:shopId
//@access public
const getSingleShop = asyncHandler(async (req, res) => {
  const { shopId } = req.params;
  //get shop

  const shop = await Shop.findById(shopId);
  if (!shop) {
    res.status(401).json({ msg: "Shop not found" });
  }
  if (shop.owner_id.toString() !== req.user.id) {
    res.status(401).json({ msg: "Not authorized" });
  }
  res.status(200).json({ success: true, result: shop });
});

//@des Create a Shop
//@route POST /api/shops
//@access Private
const createShop = asyncHandler(async (req, res) => {
  const {
    name,
    street,
    house,
    addition,
    postcode,
    city,
    country,
    phone,
    email,
    kvk,
    iban,
    image,
    logo,
    description,
  } = req.body;
  if (
    !name ||
    !street ||
    !house ||
    !postcode ||
    !city ||
    !country ||
    !kvk ||
    !iban ||
    !image ||
    !logo
  ) {
    res.status(400).json({ msg: "Please fill all the fields" });
  }
  const { data } = await axios.get(
    `https://api.geoapify.com/v1/geocode/search?postcode=${postcode}&format=json&apiKey=0295f24387ed41c99bc8805b138ace7c`
  );
  if (data.results.length === 0) {
    res.status(400).json({ msg: "Invalid Postcode" });
  }
  const address = {
    street,
    house,
    addition: addition ? addition : "",
    postcode,
    city,
    country,
    lat: data.results[0].lat,
    lon: data.results[0].lon,
  };
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401).json({ msg: "User not found" });
  }
  const newShop = await Shop.create({
    name,
    address,
    phone: phone ? phone : "",
    email: email ? email : user.email,
    kvk,
    iban,
    image,
    logo,
    description,
    owner_id: req.user.id,
  });
  user.is_owner = true;
  await user.save();

  res.status(201).json({ success: true, result: newShop });
});

//@des Delete a shop
//@route DELETE /api/shops/:shopId
//@access Private
const deleteShop = asyncHandler(async (req, res) => {
  const { shopId } = req.params;
  //get user
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401).json("User not found");
  }
  const shop = await Shop.findById(shopId);

  if (!shop) {
    res.status(404).json("Shop not found");
  }
  if (shop.owner_id.toString() !== req.user.id) {
    res.status(401).json("Not Authorized");
  }
  if (shop.baskets.length !== 0) {
    shop.baskets.forEach(async (bas) => {
      await Basket.findByIdAndDelete(bas);
    });
  }
  await shop.remove();
  user.is_owner = false;
  await user.save();
  res
    .status(200)
    .json({ success: true, result: "Your Shop Was Deleted Successfully" });
});

export { getAllShops, getSingleShop, createShop, deleteShop };
