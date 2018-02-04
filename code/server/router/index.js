/**
 * The Index of Routes
 */

module.exports = function (app) {

    // The signup route
    app.use('/signup', require('./routes/signup'));

    // The products route
    app.use('/products', require('./routes/products'))
}