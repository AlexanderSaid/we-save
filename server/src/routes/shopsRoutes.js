import express from "express";
const router = express.Router();
import { getAllShops, getSingleShop } from "../controllers/shopsControllers.js";

router.route("/").get(getAllShops);
router.route("/:id").get(getSingleShop);

export default router;
