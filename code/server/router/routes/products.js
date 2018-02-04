/**
 * This handles the signing up of products
 */
var express = require('express');
var router = express.Router();
var moment = require('moment');
var _ = require('underscore');
var color = require('cli-color');
var db = require('../../database');
var Products = db.products;

// The POST /products route
router.post('/', function (req, res) {

    var body = req.body;

    Products.findOne({

        'furniture': body.furniture

    }, function (err, user) {
  
  
            var newProduct = new Product({
                furniture : [
                    {	Seating : ['Chairs', 'Stools', 'CounterStools', 'Lean Stools', 'Benches', 'Arm Chairs', 'Sofas', 'Sofa Beds', 'Modular Seating Elements', 'Modular Sofa Elements', 'Poufs','UpHolstered Benches','Bean Bags', 'Cushions']		},
                    {	Relaxing: ['Recliners', 'Recliner Sofa', 'Day Beds', 'Chaise Longues', 'Recamiers', 'Lounge chairs with footstools', 'Wing Chairs', 'Rocking Chairs' ]		},
                    {	Tables: ['Dining Tables', 'Trestles', 'Console Tables', 'Coffee Tables', 'Side Tables', 'Nesting Tables', 'Game Tables', 'Tables and Benches']		},
                    {	'Storage/Shelving' : ['Shelves', 'Dvd Shelve', 'Iluminated Shelve', 'Library Shelve','Magazine Shelve','Shelving Module','Wall Shelves', 'CD Racks', 'Cabinets', 'Built in cupboards','Shoe Cabinets', 'Storage Systems', 'Wardrobes', 'Walk in Wardrobes' ]	},
                    { 	'Multimedia Furniture': ['Sideboards', 'Cabinets', 'Stands', 'Trolleys', 'Speakers']},
                    {	'Bedroom Furniture' : ['Double beds', 'Single Beds', 'Divan Beds', 'Adjustable beds', 'Four poster beds', 'Stacking', 'Sliding', 'Children', 'Sofa']},
                    {	'Complementary': ['Screen Cabinets', 'Magazine Cabinets', 'Drinks Cabinets', 'Tea Cabinets', 'Library Leaders']},
                    {	'Office' : ['Desks', 'Bureaus', 'Computer Desks']},
                    {	'Hallway': ['Hooks', 'Racks', 'Coat Hangers', 'Console Tables', 'Mirros', 'Umbrella Desks']},
                    {	'Kids Furniture' : ['Chairs', 'Stools', 'Benches', 'Arm Chairs']},
                    {	'Laundry Room' : ['Desks', 'Dryers', 'Baskets']},
                    {	'Fiteness Room' :  ['Treadmills', 'Multi gyms', 'wellness tools', 'Elliptical tools']}
                ]
            });


            newProduct.save(function (err, savedProduct, numberAffected) {

                if (err) {
                    console.log('Problem saving the product ' + color.yellow('furniture') + ' due to ' + err);
                    res.status(500).json({
                        'message': 'Database error trying to Add product.  Please contact support@archetrades.com.'
                    });
                }

                
                console.log('Successfully created new product: ' + color.green('furniture'));

                res.status(201).json({
                    'message': 'Successfully created new product',
                    'client': _.omit(savedProduct, 'id')
                });

            });
    });

});

// export the router for usage in our server/router/index.js
module.exports = router;