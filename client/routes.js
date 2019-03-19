const routes = require('next-routes')();

routes
    .add('/', '/')
    .add('/loans/register', '/loans/register')
    .add('/loans/:address', '/loans/show');

module.exports = routes;
