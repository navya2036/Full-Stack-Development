const express = require('express');
const app = express();
const port = 3000;

let items = [];

app.use(express.json());

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
    next(); 
});

const aRoutes = require('./routes/aRoutes');
app.use('/', aRoutes);

const getItemsRoute = require('./routes/get');
app.use('/items', getItemsRoute(items));

const getItemByIdRoute = require('./routes/getById');
app.use('/items', getItemByIdRoute(items));

const addItemRoute = require('./routes/addItem');
app.use('/items', addItemRoute(items));

const deleteItemRoute = require('./routes/delete');
app.use('/items', deleteItemRoute(items));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
