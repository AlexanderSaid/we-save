import express from "express";
const router = express.Router();
import { confirmationEmail } from "../controllers/confirmationController.js";

router.route("/").post(confirmationEmail);

export default router;
