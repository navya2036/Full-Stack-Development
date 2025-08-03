const express = require('express');
const router = express.Router();

router.get('/home', (req, res) => {
    res.send('Welcome to the Home Page');
});

router.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID received: ${userId}`);
});

router.get('/search', (req, res) => {
    const { keyword, limit } = req.query;
    res.send(`Search keyword: ${keyword}, Limit: ${limit}`);
});

router.get('/google', (req, res) => {
    res.redirect('https://www.google.com');
});

module.exports = router;
