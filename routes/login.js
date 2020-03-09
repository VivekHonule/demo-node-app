const express = require('express');
const mongoose = require('mongoose')

const login_router = express.Router();
const user = mongoose.model('User');

login_router.get('/form', (req, res) => {
  res.render('login', {title: 'Login form'});
});

login_router.post('/submit', (req, res) => {
  var email_id = req.query.email;
  var passwd = req.query.password;
  user.find({ username: email_id, password: passwd }).then(user => {
    res.render('form', { title: 'Registration form' });
  }).catch(() => {
    res.render('login', {title: 'Login form'});
  });
});

module.exports = login_router;