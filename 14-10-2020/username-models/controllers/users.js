const User = require('../models/users');

exports.getAddUser=(req, res)=>
{
    res.render('add-user', {pageTitle: 'Add users', path: '/admin/add-user'});
}

exports.postAddUser = (req, res) => {
    // users.push({ title: req.body.title });
    const user = new User(req.body.title);
    user.save();
    res.redirect('/'); 
};

exports.getUser = (req, res) => {
    const users = User.fetchAll();
    res.render('user', {uname: users, pageTitle: 'user', path: '/'});
};

exports.getHome = (req, res) => {
    res.render('home', {pageTitle: 'home',path:'/home'});
};