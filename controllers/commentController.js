import asyncHandler from 'express-async-handler';
import { Comment } from '../models/relations.js';
import { commentSchema } from '../validation/commentValidation.js';
import { Op } from 'sequelize';

// @desc    Create a new comment
export const createComment = asyncHandler(async (req, res) => {
  const { error } = commentSchema.validate(req.body);
  if (error) {
    res.status(400);
    throw new Error(error.details[0].message);
  }

  const comment = await Comment.create(req.body);
  res.status(201).json(comment);
});

// @desc    Get all comments
export const getComments = asyncHandler(async (req, res) => {
  const comments = await Comment.findAll({
    where: {
      postId: req.params.postId,
    },
  });
  res.json(comments);
});

// @desc    Get single comment
export const getComment = asyncHandler(async (req, res) => {
  const comment = await Comment.findByPk(req.params.id);
  if (!comment) {
    res.status(404);
    throw new Error('Comment not found');
  }
  res.json(comment);
});

// @desc    Update comment
export const updateComment = asyncHandler(async (req, res) => {
  const comment = await Comment.findByPk(req.params.id);
  if (!comment) {
    res.status(404);
    throw new Error('Comment not found');
  }

  const { error } = commentSchema.validate(req.body);
  if (error) {
    res.status(400);
    throw new Error(error.details[0].message);
  }

  await comment.update(req.body);
  res.json(comment);
});

// @desc    Delete comment
export const deleteComment = asyncHandler(async (req, res) => {
  const comment = await Comment.findByPk(req.params.id);
  if (!comment) {
    res.status(404);
    throw new Error('Comment not found');
  }

  await comment.destroy();
  res.json({ message: 'Comment deleted' });
});

// @desc    Get comments by userId
export const getCommentsByUserId = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  const comments = await Comment.findAll({
    where: {
      userId: userId,
    },
  });
  res.json(comments);
});

// @desc    Get comments by postId
export const getCommentsByPostId = asyncHandler(async (req, res) => {
  const { postId } = req.params;
  const comments = await Comment.findAll({
    where: {
      postId: postId,
    },
  });
  res.json(comments);
});