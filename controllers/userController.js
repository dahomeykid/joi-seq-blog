import asyncHandler from 'express-async-handler';
import { User } from '../models/relations.js';
import  {userSchema} from '../validation/userValidation.js';

// @desc    Create a new user
export const createUser = asyncHandler(async (req, res) => {
  const { error } = userSchema.validate(req.body);
  if (error) {
    res.status(400);
    throw new Error(error.details[0].message);
  }

  const user = await User.create(req.body);
  res.status(201).json(user);
});

// @desc    Get all users
export const getUsers = asyncHandler(async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

// @desc    Get single user
export const getUser = asyncHandler(async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }
  res.json(user);
});

// @desc    Update user
export const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }

  const { error } = userSchema.validate(req.body);
  if (error) {
    res.status(400);
    throw new Error(error.details[0].message);
  }

  await user.update(req.body);
  res.json(user);
});

// @desc    Delete user
export const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }

  await user.destroy();
  res.json({ message: 'User deleted' });
});

// @desc    Get user by email
export const getUserByEmail = asyncHandler(async (req, res) => {
  const user = await User.findOne({ where: { email: req.params.email } });
  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }
  res.json(user);
});