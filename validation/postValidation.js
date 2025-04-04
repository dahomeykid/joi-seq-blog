import Joi from "joi";

export const postSchema = Joi.object({
    title: Joi.string().min(3).max(100).required(),
    body: Joi.string().min(10).max(5000).required(),
});

export const commentSchema = Joi.object({
    postId: Joi.number().integer().required(),
    body: Joi.string().min(1).max(500).required(),
});

