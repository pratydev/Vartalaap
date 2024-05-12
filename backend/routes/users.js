const express = require('express');
const userContoller = require('../controllers/userController');
const router = express.Router();

router.use('/auth', require('./auth'));

router.use('/profile', require('./profile'));

router.use('/posts', require('./posts'));

module.exports = router;

