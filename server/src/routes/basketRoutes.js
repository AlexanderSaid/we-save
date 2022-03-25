import express from "express";
const router = express.Router();
import {
  getAllBasket,
  getByCategoryBasket,
} from "../controllers/basketController.js";

router.route("/").get(getAllBasket);
router.route("/:category").get(getByCategoryBasket);

export default router;
