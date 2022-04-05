import express from "express";
const router = express.Router();
import protect from "../middleware/authMiddleware.js";
import basketRouter from "./basketRoutes.js";
import {
  getAllShops,
  getSingleShop,
  createShop,
  deleteShop,
} from "../controllers/shopsControllers.js";
router.use("/:shopId/baskets", basketRouter);
router.route("/").get(getAllShops).post(protect, createShop);
router
  .route("/:shopId")
  .get(protect, getSingleShop)
  .delete(protect, deleteShop);

export default router;
