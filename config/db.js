// import mongoose from "mongoose";

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI);

//     console.log("MongoDB Connected", conn.connection.host);
//   } catch (error) {
//     console.error("Database Error:", error);
//     process.exit(1);
//   }
// };

// export default connectDB;

import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config();

export const connectDB = async () => {
  try {
    // const MONGO_URI = 'mongodb+srv://jepisha0509_db_user:faKx5iedpDN5ZwzA@clustertest.tuqwj9u.mongodb.net/?appName=Clustertes';
    const MONGO_URI =
      "mongodb+srv://jepisha0509_db_user:faKx5iedpDN5ZwzA@clustertest.tuqwj9u.mongodb.net/taskmanager?retryWrites=true&w=majority";

    if (!MONGO_URI) {
      throw new Error("MONGO_URI is not set in .env file");
    }

    const conn = await mongoose.connect(MONGO_URI);

    console.log("✅ MongoDB Connected:", conn.connection.host);
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error.message);
    process.exit(1); // 1 = failure
  }
};

//  export default connectDB;
connectDB();