import mongoose from "mongoose";
import dotenv from "dotenv";
import Post from "./models/Post.js";

dotenv.config();

const MONGO_URI = process.env.MONGODB_URI;

// Seed posts data with isPublished: true
const posts = [
  {
    title: "A Weekend in the Swiss Alps",
    content: "Last weekend, I explored the breathtaking Swiss Alps...",
    author: "652d9a1f6f1c2a1234567890", // Morgan's ObjectId
    category: "652d9b2f6f1c2a1234567891", // Travel category ObjectId
    createdAt: "2025-11-01T08:00:00Z",
    slug: "a-weekend-in-the-swiss-alps",
    isPublished: true,
  },
  {
    title: "The Best Homemade Pizza Recipe",
    content: "Making pizza at home is easier than you think...",
    author: "652d9a1f6f1c2a1234567890",
    category: "652d9b2f6f1c2a1234567892", // Food
    createdAt: "2025-11-01T09:30:00Z",
    slug: "the-best-homemade-pizza-recipe",
    isPublished: true,
  },
  {
    title: "How I Stay Productive While Working from Home",
    content: "Working remotely can be challenging...",
    author: "652d9a1f6f1c2a1234567890",
    category: "652d9b2f6f1c2a1234567893", // Lifestyle
    createdAt: "2025-11-01T10:00:00Z",
    slug: "how-i-stay-productive-while-working-from-home",
    isPublished: true,
  },
  {
    title: "Exploring Local Coffee Shops",
    content: "On a rainy afternoon, I went on a coffee shop tour...",
    author: "652d9a1f6f1c2a1234567890",
    category: "652d9b2f6f1c2a1234567893", // Lifestyle
    createdAt: "2025-11-01T11:00:00Z",
    slug: "exploring-local-coffee-shops",
    isPublished: true,
  },
  {
    title: "Photography Tips for Beginners",
    content: "Photography is all about capturing the moment...",
    author: "652d9a1f6f1c2a1234567890",
    category: "652d9b2f6f1c2a1234567894", // Photography
    createdAt: "2025-11-01T12:00:00Z",
    slug: "photography-tips-for-beginners",
    isPublished: true,
  },
];

const seedDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");

    await Post.deleteMany({});
    console.log("Existing posts cleared");

    await Post.insertMany(posts);
    console.log("Posts added successfully");

    process.exit();
  } catch (err) {
    console.error("Error seeding posts:", err);
    process.exit(1);
  }
};

seedDB();
