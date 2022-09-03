import asyncHandler from "express-async-handler";
import { goalModel } from "../models/goalModel.mjs";

// @desc Get goals
// @route GET /api/goals
// @access Private
export const getGoals = asyncHandler(async (req, res) => {
  const goals = await goalModel.find();
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
  const goal = await goalModel.create({
    text: req.body.text,
  });
  res.status(200).send(goal);
});

// @desc Update goal
// @route PUT /api/goals/:id
// @access Private
export const updateGoal = asyncHandler(async (req, res) => {
  const goal = await goalModel.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }
  const updatedGoal = await goalModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).send(updatedGoal);
});
// @desc Delete goal
// @route DELETE /api/goals/:id
// @access Private
export const deleteGoal = asyncHandler(async (req, res) => {
  await goalModel.findByIdAndRemove(req.params.id);
  res.status(200).send({ id: req.params.id });
});
