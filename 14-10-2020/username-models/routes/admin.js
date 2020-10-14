const path = require('path');
const express = require('express');
const joi = require('joi');
const rootDir = require('../util/path');
const usersController = require('../controllers/users');

const router = express.Router();
// /admin/add-user => GET
router.get('/add-user', usersController.getAddUser);
// /admin/add-user => POST
router.post('/add-user', usersController.postAddUser);
module.exports = router;