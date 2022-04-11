import express from "express";
import protect from "../middleware/authMiddleware.js";
const router = express.Router();

import {
  getBaskets,
  decreaseQuantity,
} from "../controllers/basketController.js";

router.route("/").get(getBaskets);
router.route("/:basketId/decrease").get(protect, decreaseQuantity);
export default router;
