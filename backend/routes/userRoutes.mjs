import { Router } from "express";
import {
  getMe,
  loginUser,
  registerUser,
} from "../controllers/userController.mjs";
import { protect } from "../middleware/authMiddleware.mjs";

const router = Router();
router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);

export default router;
