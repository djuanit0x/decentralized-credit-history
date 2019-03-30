const {createServer} = require('http');
const next = require('next');
// const express = require('express');

const app = next({
    dev: process.env.NODE_ENV !== 'production'
});

const routes = require('./routes');
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
    createServer(handler).listen(process.env.PORT || 3000, err => {
        if (err) throw err;
        console.log('Ready on localhost:3000');
    });
});

// const express = require('express');
// const next = require('next');
// const cors = require('cors');

// const app = next({
//     dev: process.env.NODE_ENV !== 'production'
// });

// const handle = app.getRequestHandler();

// app.prepare().then(() => {
//     const server = express();
//     server.use(cors());

//     server.get('/', (req, res) => {
//         return app.render(req, res, '/', req.query);
//     });

//     server.get('/loans/register', (req, res) => {
//         return app.render(req, res, '/loans/register', req.query);
//     });

//     server.get('/loans/:address', (req, res) => {
//         return app.render(req, res, '/loans', {address: req.params.address});
//     });

//     server.get('*', (req, res) => {
//         return handle(req, res);
//     });

//     server.listen(process.env.PORT || 3000, err => {
//         if (err) throw err;
//         console.log(`> Ready on http://localhost:${process.env.PORT || 3000}`);
//     });
// });
