import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import { connectDB } from "./DB/connectdb.js";
import authRoutes from "./routes/auth.route.js";
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cookieParser()); // allow us to parse incoming cookies

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log("Server is listening on port:", PORT);
});
//VKIiPdc1ww3TPb7F
