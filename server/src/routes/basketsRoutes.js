import express from "express";
const router = express.Router();

import { getBaskets } from "../controllers/basketController.js";

router.route("/").get(getBaskets);

export default router;
