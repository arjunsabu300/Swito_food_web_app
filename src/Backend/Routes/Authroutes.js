const express = require('express');
const { register, login, getMe } = require('../Controller/Authcontroller');
const { protect } = require('../Middleware/Auth');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe);

module.exports = router;
