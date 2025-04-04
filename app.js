import express from "express";
import postRoutes from "./routes/postRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/posts", postRoutes); // All routes in this file are prefixed with /posts
app.use("/categories", categoryRoutes); // All routes in this file are prefixed with /categories
app.use("/users", userRoutes); // All routes in this file are prefixed with /users
app.use("/posts/:postId/comments", commentRoutes); // All routes in this file are prefixed with /posts/:postId/comments


// Sample route for the root URL
app.get("/", (req, res) => {
    res.send("Welcome to the Blog API!");
});

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(res.statusCode || 500).json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
});

export default app;