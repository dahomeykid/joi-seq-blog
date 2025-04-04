import express from "express";
import {getCategories, getCategory, createCategory, updateCategory, deleteCategory} from "../controllers/categoryController.js";

const router = express.Router();

// All routes in this file are prefixed with /categories
router.route("/")
    .get(getCategories) // GET /categories - Get all categories
    .post(createCategory); // POST /categories - Create a new category

router.route("/:id")
    .get(getCategory) // GET /categories/:id - Get a category by ID
    .put(updateCategory) // PATCH /categories/:id - Update a category by ID
    .delete(deleteCategory); // DELETE /categories/:id - Delete a category by ID

export default router;
// This code defines the routes for managing categories in a blog application.
