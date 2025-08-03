const express = require('express');

function addItemRoute(items) {
    const router = express.Router();

    router.use('/add/:name', (req, res, next) => {
        if (!req.params.name) {
            return res.status(400).json({ error: 'Item name is required in URL' });
        }
        next();
    });

    router.get('/add/:name', (req, res) => {
        const name = req.params.name;
        const newItem = {
            id: items.length + 1,
            name: name
        };
        items.push(newItem);
        res.json(newItem);
    });

    return router;
}

module.exports = addItemRoute;
