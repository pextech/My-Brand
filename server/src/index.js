import express from "express";
import { config } from "dotenv";
import connectDB from "./config/db";

config();
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(
  process.env.PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} at ${process.env.PORT}`
  )
);
