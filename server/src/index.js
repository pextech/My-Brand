import express from "express";
import { config } from "dotenv";
import connectDB from "./config/db";
import fileupload from "express-fileupload";
import routes from "./routes/index";
import errorHandler from "./middlewares/error";

config();
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(fileupload({ useTempFiles: true }));

app.use("/shema", routes);
app.use(errorHandler);

app.listen(
  process.env.PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} at ${process.env.PORT}`
  )
);
