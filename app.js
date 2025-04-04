import express from "express";
import postRoutes from "./routes/postRoutes.js";

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/posts", postRoutes); // All routes in this file are prefixed with /posts

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