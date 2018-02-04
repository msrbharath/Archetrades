/**
 * Our Schema for Products
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define the Products Schema
var productSchema = new Schema({
    furniture:
    [ { Seating: [Array] },
      { Relaxing: [Array] },
      { Tables: [Array] },
      { 'Storage/Shelving': [Array] },
      { 'Multimedia Furniture': [Array] },
      { 'Bedroom Furniture': [Array] },
      { Complementary: [Array] },
      { Office: [Array] },
      { Hallway: [Array] },
      { 'Kids Furniture': [Array] },
      { 'Laundry Room': [Array] },
      { 'Fiteness Room': [Array] } ]
});


var productSchema1 = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profile: {} // for extra information you may / may not want
});

// A method that's called every time a user document is saved..
productSchema.pre('save', function (next) {

    var product = this;

    if (!product.isModified('furniture')) {
        return next();
    }

    
});

// The primary product model
var Product = mongoose.model('Product', productSchema1);

module.exports = Product;