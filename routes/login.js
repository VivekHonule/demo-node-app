const express = require('express');

const login_router = express.Router();

login_router.get('/login/form', (req, res) => {
  res.render('login');
});

login_router.post('/login/submit', (req, res) =>{
  res.send('Login attempted');
});

module.exports = login_router; 