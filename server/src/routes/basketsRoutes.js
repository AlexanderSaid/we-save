import express from "express";
import protect from "../middleware/authMiddleware.js";
const router = express.Router();

import {
  getBaskets,
  decreaseQuantity,
  getOneBasket,
} from "../controllers/basketController.js";

router.route("/").get(getBaskets);
router.route("/:basketId/decrease").get(protect, decreaseQuantity);
router.route("/:basketId").get(getOneBasket);
export default router;
