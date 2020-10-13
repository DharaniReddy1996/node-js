const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const router = express.Router();

const adminData = require('../routes/admin');

router.get('/', (req, res, next) => {
   const users=adminData.users;
   res.render('user',{uname:users,pageTitle:'user',activeUser:true});
});

module.exports = router;