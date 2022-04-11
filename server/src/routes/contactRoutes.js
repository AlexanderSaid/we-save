import express from "express";
const router = express.Router();
import protect from "../middleware/authMiddleware.js";
import {
  contactEmail,
  confirmationEmail,
} from "../controllers/contactController.js";

router.route("/").post(contactEmail);
router.route("/confirm/:id").post(protect, confirmationEmail);

export default router;
