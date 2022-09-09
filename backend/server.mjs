import express from "express";
import dotenv from "dotenv";
import goalRoutes from "./routes/goalRoutes.mjs";
import userRoutes from "./routes/userRoutes.mjs";
import { errorHandler } from "./middleware/errorMiddleware.mjs";
import colors from "colors";
import { connectDB } from "./config/db.mjs";

connectDB();
dotenv.config();
const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/goals", goalRoutes);
app.use("/api/users", userRoutes);
app.use(errorHandler);
app.listen(port, () => {
  console.log(`server started on :${port}`);
});
