const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: true }))
app.use('/login', require('./routes/login'))
app.use('/', require('./routes/index'));

app.use(express.static('public'));

module.exports = app