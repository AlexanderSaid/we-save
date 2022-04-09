import express from "express";
const router = express.Router();
import { confirmatioEmail } from "../controllers/confirmationController.js";

router.route("/").post(confirmatioEmail);

export default router;
