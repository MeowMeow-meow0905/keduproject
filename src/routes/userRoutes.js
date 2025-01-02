const express = require('express');
const db = require('../models/db');
const router = express.Router();

router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', (req, res) => {
    const { username, password, confirmPassword, nickname, region, passed_year, secret_code } = req.body;

    if (password !== confirmPassword) {
        return res.send('Passwords do not match!');
    }

    if (secret_code !== 'meow0905') {
        return res.send('Invalid secret code!');
    }

    const sql = 'INSERT INTO users (username, password, nickname, region, passed_year, secret_code) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(sql, [username, password, nickname, region, passed_year, secret_code], (err, result) => {
        if (err) throw err;
        res.redirect('/login');
    });
});

module.exports = router;
