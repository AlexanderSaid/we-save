import express from "express";
import { registerUser } from "../controllers/userController.js";

const router = express.Router();
router.route("/api/users").post(registerUser);

export default router;
