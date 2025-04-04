import asyncHandler from 'express-async-handler';
import { Post, Comment } from '../models/relations.js';
import {postSchema} from '../validation/postValidation.js';

// @desc    Create a new post
export const createPost = asyncHandler(async (req, res) => {
  const { error } = postSchema.validate(req.body);
  if (error) {
    res.status(400);
    throw new Error(error.details[0].message);
  }

  const post = await Post.create(req.body);
  res.status(201).json(post);
});

// @desc    Get all posts
export const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.findAll();
  res.json(posts);
});

// @desc    Get single post
export const getPost = asyncHandler(async (req, res) => {
  const post = await Post.findByPk(req.params.id);
  if (!post) {
    res.status(404);
    throw new Error('Post not found');
  }
  res.json(post);
});

// @desc    Update post
export const updatePost = asyncHandler(async (req, res) => {
  const post = await Post.findByPk(req.params.id);
  if (!post) {
    res.status(404);
    throw new Error('Post not found');
  }

  const { error } = postSchema.validate(req.body);
  if (error) {
    res.status(400);
    throw new Error(error.details[0].message);
  }

  await post.update(req.body);
  res.json(post);
});

// @desc    Delete post
export const deletePost = asyncHandler(async (req, res) => {
  const post = await Post.findByPk(req.params.id);
  if (!post) {
    res.status(404);
    throw new Error('Post not found');
  }

  await post.destroy();
  res.json({ message: 'Post deleted' });
});

// @desc Get all comments for a post
export const getPostComments = asyncHandler(async (req, res) => {
  const postId = req.params.id;
  const comments = await Comment.findAll({
    where: { postId },
  });
  res.json(comments);
});

// @desc Add a comment to a post
export const addCommentToPost = asyncHandler(async (req, res) => {
  const postId = req.params.id;
  const { error } = commentSchema.validate(req.body);
  if (error) {
    res.status(400);
    throw new Error(error.details[0].message);
  }

  const comment = await Comment.create({
    ...req.body,
    postId,
  });
  res.status(201).json(comment);
});




