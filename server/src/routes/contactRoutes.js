import express from "express";
const router = express.Router();
import { contactEmail } from "../controllers/contactController.js";

router.route("/").post(contactEmail);

export default router;
