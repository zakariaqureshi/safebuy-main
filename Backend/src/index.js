import connectDB from "./db/index.js";

import dotenv from "dotenv";
import app from "./app.js";
dotenv.config({
  path: "../.env",
});
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8080, () => {
      console.log(`Server running on ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed !!", err);
  });
