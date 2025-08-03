const express = require('express');

function getItemsRoute(items) {
    const router = express.Router();

    router.get('/', (req, res) => {
        res.json(items);
    });

    return router;
}

module.exports = getItemsRoute;