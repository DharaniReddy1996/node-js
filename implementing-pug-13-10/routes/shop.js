const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();
const adminData = require('../routes/admin');

router.get('/', (req, res, next) => {
   const products=adminData.products;
   res.render('shop',{prods:products,pageTitle:'shop'})
});

module.exports = router;