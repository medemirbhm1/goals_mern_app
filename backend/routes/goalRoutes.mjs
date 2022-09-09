import { Router } from "express";
import {
  deleteGoal,
  getGoals,
  setGoal,
  updateGoal,
} from "../controllers/goalController.mjs";
import { protect } from "../middleware/authMiddleware.mjs";

const router = Router();
router.route("/").get(protect, getGoals).post(protect, setGoal);
router.route("/:id").delete(protect, deleteGoal).put(protect, updateGoal);

export default router;
