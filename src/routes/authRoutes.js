const express = require('express');
const db = require('../models/db');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: '에듀파인 실습 사이트' });
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    db.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            res.redirect('/dashboard');
        } else {
            res.send('Invalid credentials!');
        }
    });
});

module.exports = router;
