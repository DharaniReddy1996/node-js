const path = require('path');
const express = require('express');
const joi = require('joi');
const rootDir = require('../util/path');

const router = express.Router();
const users=[];

// /admin/add-user => GET
router.get('/add-user', (req, res, next) => {
    res.render('add-user',{pageTitle:'add-user',activeAddUser: true})
});

// /admin/add-user => POST
router.post('/add-user', (req, res, next) => {
   
    users.push({title:req.body.title})
    res.redirect('/');
});

module.exports.users=users;
module.exports.router=router;