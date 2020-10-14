const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const router = express.Router();
const usersController = require('../controllers/users');

router.get('/',usersController.getUser);

module.exports = router;