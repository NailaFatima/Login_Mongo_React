const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/signUp', authController.SignUp);
router.post('/signIn', authController.SignIn);
router.post('/logout', authController.LogOut);

module.exports = router
