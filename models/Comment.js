import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Comment = sequelize.define("Comment", {
    body: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
});

export default Comment;