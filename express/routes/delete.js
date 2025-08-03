const express = require('express');

function deleteItemRoute(items) {
    const router = express.Router();

    router.delete('/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const index = items.findIndex(item => item.id === id);

        if (index === -1) {
            return res.status(404).json({ error: 'Item not found' });
        }

        const deleted = items.splice(index, 1);
        res.json({ message: 'Item deleted', item: deleted[0] });
    });
    return router;
}

module.exports = deleteItemRoute;