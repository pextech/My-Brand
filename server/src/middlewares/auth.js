import jwt from "jsonwebtoken";
import asyncHandler from "./async";
import errorResponse from "../util/errorResponse";
import User from "../modal/user";
import { config } from "dotenv";

config();

exports.protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    // Set token from Bearer token in header
    token = req.headers.authorization.split(" ")[1];
  }
  // Make sure token exists
  if (!token) {
    return next(new errorResponse("Not authorized to access this route", 401));
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded.id);

    next();
  } catch (err) {
    return next(new errorResponse("Not authorized to access this route", 401));
  }
});
