import express from "express";
const router = express.Router();
import protect from "../middleware/authMiddleware.js";
import {
  registerUser,
  loginUser,
  getProfile,
} from "../controllers/userController.js";

router.route("/").post(registerUser);
router.route("/login").post(loginUser);
router.route("/:id").get(protect, getProfile);

export default router;
