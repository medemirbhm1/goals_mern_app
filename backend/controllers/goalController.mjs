import asyncHandler from "express-async-handler";
import Goal from "../models/goalModel.mjs";
import User from "../models/userModel.mjs";
// @desc Get goals
// @route GET /api/goals
// @access Private
export const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ createdBy: req.user.id });
  res.status(200).send(goals);
});

// @desc Set goal
// @route POST /api/goals
// @access Private
export const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add text");
  }
  const goal = await Goal.create({
    text: req.body.text,
    createdBy: req.user.id,
  });
  res.status(200).send(goal);
});

// @desc Update goal
// @route PUT /api/goals/:id
// @access Private
export const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }
  if (goal.createdBy.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).send(updatedGoal);
});
// @desc Delete goal
// @route DELETE /api/goals/:id
// @access Private
export const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }
  if (goal.createdBy.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }
  await goal.remove();
  res.status(200).send({ id: req.params.id });
});
