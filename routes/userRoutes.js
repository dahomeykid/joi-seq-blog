import express from "express";
import { getUsers, getUser, createUser, updateUser, deleteUser } from "../controllers/userController.js";


const router = express.Router();

// All routes in this file are prefixed with /users
router.route("/")
    .get(getUsers) // GET /users - Get all users
    .post(createUser); // POST /users - Create a new user

router.route("/:id")
    .get(getUser) // GET /users/:id - Get a user by ID
    .put(updateUser) // PATCH /users/:id - Update a user by ID
    .delete(deleteUser); // DELETE /users/:id - Delete a user by ID


export default router;