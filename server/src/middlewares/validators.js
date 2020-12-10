import Joi from "joi";
import { joiResponse } from "../util/joiresponse";

export const blogValidator = (req, res, next) => {
  const schema = Joi.object({
    Title: Joi.string().min(5).max(25).required(),
    Content: Joi.string().min(10).required(),
  });
  joiResponse(req, res, schema, next);
};
