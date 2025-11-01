// server/checkPosts.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import Post from "./models/Post.js";

dotenv.config();

const MONGO_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGO_URI)
  .then(async () => {
    console.log("Connected to MongoDB");

    const posts = await Post.find({});
    if (posts.length === 0) {
      console.log("No posts found in the database");
    } else {
      console.log("Posts in DB:");
      console.log(posts);
    }

    mongoose.connection.close();
  })
  .catch((err) => console.error(err));
