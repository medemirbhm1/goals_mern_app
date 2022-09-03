import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://emir:emir@cluster0.ztucyrk.mongodb.net/mernapp?retryWrites=true&w=majority"
    );
    console.log(`mongo connected ${conn.connection.host}`.cyan.underline);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
