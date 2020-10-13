const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const adminData = require('./routes/admin');
const userRoutes = require('./routes/user');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/admin', adminData.router);
app.use(userRoutes);

app.use((req, res, next) => {
    res.render('404',{pageTitle: 'error'});
});

app.listen(3001);
