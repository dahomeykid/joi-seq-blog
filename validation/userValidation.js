import Joi from "joi";

// User validation schema using Joi
// This schema will validate the user data before creating a new user
export const userSchema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(100).required(),
});