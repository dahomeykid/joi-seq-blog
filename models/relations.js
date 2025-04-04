import Post from "./Post.js";
import User from "./User.js";
import Comment from "./Comment.js";
import Category from "./Category.js";

// Define associations
User.hasMany(Post, { foreignKey: "userId" });
Post.belongsTo(User, { foreignKey: "userId" });

User.hasMany(Comment, { foreignKey: "userId" });
Comment.belongsTo(User, { foreignKey: "userId" });

Post.hasMany(Comment, { foreignKey: "postId" });
Comment.belongsTo(Post, { foreignKey: "postId" });

Category.hasMany(Post, { foreignKey: "categoryId" });
Post.belongsTo(Category, { foreignKey: "categoryId" });

export { User, Post, Comment, Category };