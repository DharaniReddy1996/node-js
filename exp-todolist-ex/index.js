const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const homeRoutes = require('./routes/home')
const adminRoutes = require('./routes/addtodo');
const shopRoutes = require('./routes/display');


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(homeRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3001);