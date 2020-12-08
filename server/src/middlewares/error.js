import errorResponse from "../util/errorResponse";

const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  // Mongoose bad ObjectId

  // Mongoose Duplicate Key
  if (err.code === 11000) {
    const message = "Duplicate field Value Entered";
    error = new errorResponse(message, 400);
  }

  // Mongoose Validation Error
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((val) => val.message);
    error = new errorResponse(message, 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "Server error",
  });
};

export default errorHandler;
