import express from 'express';
import { getComments, getComment, createComment, updateComment, deleteComment } from '../controllers/commentController.js';

//import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// All routes in this file are prefixed with /posts/:postId/comments
//router.use(protect); // Protect all routes in this file

router.route('/')
    .get(getComments) // GET /posts/:postId/comments - Get all comments for a post
    .post(createComment); // POST /posts/:postId/comments - Create a new comment for a post

router.route('/:id')
    .get(getComment) // GET /posts/:postId/comments/:id - Get a comment by ID
    .put(updateComment) // PATCH /posts/:postId/comments/:id - Update a comment by ID
    .delete(deleteComment); // DELETE /posts/:postId/comments/:id - Delete a comment by ID

export default router;
// This code defines the routes for managing comments in a blog application.
