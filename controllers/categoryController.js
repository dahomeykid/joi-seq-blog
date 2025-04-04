import asyncHandler from 'express-async-handler';
import { Category } from '../models/relations.js';
import { categorySchema } from '../validation/categoryValidation.js';

// @desc    Create a new category
export const createCategory = asyncHandler(async (req, res) => {
  const { error } = categorySchema.validate(req.body);
  if (error) {
    res.status(400);
    throw new Error(error.details[0].message);
  }

  const category = await Category.create(req.body);
  res.status(201).json(category);
});

// @desc    Get all categories
export const getCategories = asyncHandler(async (req, res) => {
  const categories = await Category.findAll();
  res.json(categories);
});

// @desc    Get single category
export const getCategory = asyncHandler(async (req, res) => {
  const category = await Category.findByPk(req.params.id);
  if (!category) {
    res.status(404);
    throw new Error('Category not found');
  }
  res.json(category);
});

// @desc    Update category
export const updateCategory = asyncHandler(async (req, res) => {
  const category = await Category.findByPk(req.params.id);
  if (!category) {
    res.status(404);
    throw new Error('Category not found');
  }

  const { error } = categorySchema.validate(req.body);
  if (error) {
    res.status(400);
    throw new Error(error.details[0].message);
  }

  await category.update(req.body);
  res.json(category);
});

// @desc    Delete category
export const deleteCategory = asyncHandler(async (req, res) => {
  const category = await Category.findByPk(req.params.id);
  if (!category) {
    res.status(404);
    throw new Error('Category not found');
  }

  await category.destroy();
  res.json({ message: 'Category deleted' });
});
