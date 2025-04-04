import Joi from "joi";

// Comment validation schema using Joi
// This schema will validate the comment data before creating a new comment
export const commentSchema = Joi.object({
    postId: Joi.number().integer().required(), // Assuming postId is an integer
    body: Joi.string().min(1).max(500).required(), // Comment body must be between 1 and 500 characters
});

