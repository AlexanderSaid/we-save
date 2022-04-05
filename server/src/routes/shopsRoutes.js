import express from "express";
const router = express.Router();
import {
  getAllShops,
  getSingleShop,
  createShop,
  deleteShop,
} from "../controllers/shopsControllers.js";
import protect from "../middleware/authMiddleware.js";

router.route("/").get(getAllShops).post(protect, createShop);
router.route("/:shopId").get(getSingleShop).delete(protect, deleteShop);

export default router;
