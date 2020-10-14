const Product = require('../models/products');

exports.getAddProduct=(req, res)=>
{
    res.render('add-product', {pageTitle: 'Add Product', path: '/admin/add-product'});
}

exports.postAddProduct = (req, res) => {
    // products.push({ title: req.body.title });
    const product = new Product(req.body.title,req.body.price,req.body.desc,req.body.image);
    product.save();
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
      res.render('shop', {prods: products,pageTitle: 'Shop',path: '/'});
    });
};
  

exports.home = (req, res) => {
    res.render('home', {pageTitle: 'home', path: '/home'});
};