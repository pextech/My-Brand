import express from "express";
import { config } from "dotenv";
import connectDB from "./config/db";

// load env bars
config();

// connecting to the database
connectDB();

const app = express();

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(
  process.env.PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} at ${process.env.PORT}`
  )
);
