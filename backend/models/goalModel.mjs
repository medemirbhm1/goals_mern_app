import mongoose from "mongoose";

const goalSchema = mongoose.Schema(
  {
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    text: {
      type: String,
      required: [true, "Please add a text value"],
    },
  },
  {
    timestamps: true,
  }
);
const goalModel = mongoose.model("Goal", goalSchema);
export default goalModel;
