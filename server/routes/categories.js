const express = require('express');
const router = express.Router();
const { getAllCategories, createCategory } = require('../controllers/categoryController');
const { protect } = require('../middleware/authMiddleware');

// Public route
router.get('/', getAllCategories);

// Protected route
router.post('/', protect, createCategory);

module.exports = router; // ✅ must be router
