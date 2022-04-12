import express from "express";
const router = express.Router();
import protect from "../middleware/authMiddleware.js";
import {
  registerUser,
  loginUser,
  getProfile,
  forgotPassword,
  reSettingPassword,
} from "../controllers/userController.js";

router.route("/").post(registerUser);
router.route("/login").post(loginUser);
router.route("/:id").get(protect, getProfile);
router.route("/forgot-password").post(forgotPassword);
router.route("/reset-password").put(reSettingPassword);

export default router;
