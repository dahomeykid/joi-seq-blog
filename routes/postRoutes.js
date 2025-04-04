import express from "express";
import {getPosts, getPost, createPost, updatePost, deletePost} from "../controllers/postController.js";

const router = express.Router();

// All routes in this file are prefixed with /posts
router.route("/")
    .get(getPosts) // GET /posts - Get all posts
    .post(createPost); // POST /posts - Create a new post

router.route("/:id")
    .get(getPost) // GET /posts/:id - Get a post by ID
    .put(updatePost) // PATCH /posts/:id - Update a post by ID
    .delete(deletePost); // DELETE /posts/:id - Delete a post by ID

export default router;