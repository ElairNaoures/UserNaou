const express = require('express');
const router = express.Router();
const userController = require('../Controllers/User');

//router.post('/users', userController.createUser);
router.post('/register', userController.createUser);
router.post('/login', userController.createUserLogin);


module.exports = router;
