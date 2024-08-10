// routes/authRoutes.js
const express = require('express');
const { signup, login, getProfile, getAllUsers } = require('../controllers/authController');
const { protect, admin } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/profile', protect, getProfile);
router.get('/users', protect, admin, getAllUsers);

module.exports = router;
