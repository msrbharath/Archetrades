'use strict';

/**
 * @ngdoc function
 * @name archeTradesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the archeTradesApp
 */
 
angular.module('archeTradesApp')
  .factory('States', function(){
  var states = ['Chairs', 'Stools', 'CounterStools', 'Lean Stools', 'Benches', 'Arm Chairs', 'Sofas', 'Sofa Beds', 'Modular Seating Elements', 'Modular Sofa Elements', 'Poufs','UpHolstered Benches','Bean Bags', 'Cushions','Recliners', 'Recliner Sofa', 'Day Beds', 'Chaise Longues', 'Recamiers', 'Lounge chairs with footstools', 'Wing Chairs', 'Rocking Chairs','Dining Tables', 'Trestles', 'Console Tables', 'Coffee Tables', 'Side Tables', 'Nesting Tables', 'Game Tables', 'Tables and Benches','Shelves', 'Dvd Shelve', 'Iluminated Shelve', 'Library Shelve','Magazine Shelve','Shelving Module','Wall Shelves', 'CD Racks', 'Cabinets', 'Built in cupboards','Shoe Cabinets', 'Storage Systems', 'Wardrobes', 'Walk in Wardrobes','Sideboards', 'Cabinets', 'Stands', 'Trolleys', 'Speakers','Double beds', 'Single Beds', 'Divan Beds', 'Adjustable beds', 'Four poster beds', 'Stacking', 'Sliding', 'Children', 'Sofa','Screen Cabinets', 'Magazine Cabinets', 'Drinks Cabinets', 'Tea Cabinets', 'Library Leaders','Desks', 'Bureaus', 'Computer Desks','Hooks', 'Racks', 'Coat Hangers', 'Console Tables', 'Mirros', 'Umbrella Desks','Chairs', 'Stools', 'Benches', 'Arm Chairs','Desks', 'Dryers', 'Baskets','Treadmills', 'Multi gyms', 'wellness tools', 'Elliptical tools'];
  
  return states;
  
}); 
angular.module('archeTradesApp')
  .controller('MainCtrl', ['$scope', '$window', 'States', function ($scope,$window,States) {
    
    $scope.selected = undefined;
	$scope.states = States;
	$scope.s = 'vsv';
	function basedOnSearch(arr) {
		return arr.indexOf($scope.searchItems) > -1;
	}

	$scope.redirectState = function(page){
    	$window.location.href = '/#!/'+page;
	};
	
	$scope.selectProduct = function(states,i,ithstate){
		console.log('== States =='+states);
		console.log('== i =='+i);
		console.log('== ith State =='+ithstate);
		$window.location.href= '/#!/product/'+i;
	};

	$scope.$watch('searchItems', function(newVal,oldVal){
		if(newVal!==oldVal){
			$scope.states = States.filter(basedOnSearch);
			$scope.showTypeAhead = ($scope.searchItems.split.length > 1) ?  true : false;
		}
		
	});

  }]);

angular.module('archeTradesApp')
  .controller('signInCtrl', ['$scope', '$window','$http', function ($scope, $window, $http) {
    	$scope.cname = '';
    	$scope.password ='';
    	$scope.showmsg = false;
    	$scope.errorArray = [];
    	function checkForPassword(arr){
    		console.log(arr+''+$window);
    		var response = {
				username : 'Meenakshisundaram',
				companyname : 'SOME',
				phoneNo : '9965924121',
				password : '123'
			};
    		if(response.companyname === $scope.cname && response.password===$scope.password){
    			return true;
    		}
    		else{
    			$scope.errorArray = [];
    			$scope.showMsg = true;
    			$scope.errorArray.push('Wrong Password, Please Click in Forgot Password / Sign In');
    			return false;
    		}
    	}

	    $scope.forgotPassword = function(){
	    	$scope.errorArray = [];
	    	$scope.showMsg = true;
	    	$scope.errorArray.push('We have Mailed you the temporary Password');
	    };
    	$scope.logIn = function(){
    		$http.get('../json/getLoggedInCredentials.json')
            .then(function(data) { 
               if(checkForPassword(data)){
					$window.location.href = '/#!/products';
               }
            }, function(response){
            	 console.log('Error occured'+response);
            });
    	};
  }]);


angular.module('archeTradesApp')
  .controller('productsCtrl', ['$scope', '$window', function ($scope, $window) {
    	console.log($window);
    	$scope.userName = 'Meenakshisundaram';
		$scope.category = 'Furniture';
		$scope.searchResults = true;
    	$scope.filterproducts=function(){
    		$scope.searchResults = true;
    	};
    	$scope.items = [
    		{'name' : 'Furniture', 'qunatityAvailable': '15', 'src': 'images/f1.jpg'},
    		{'name' : 'Lightings', 'qunatityAvailable': '12', 'src': 'images/f2.jpg'},
    		{'name' : 'Paintings', 'qunatityAvailable': '11', 'src': 'images/f3.jpg'},
    		{'name' : 'Wooden Articles', 'qunatityAvailable': '33', 'src': 'images/f4.jpg'},
    		{'name' : 'Dining Table', 'qunatityAvailable': '43', 'src': 'images/f5.jpg'},
    		{'name' : 'Table Fan', 'qunatityAvailable': '22', 'src': 'images/f6.jpg'},
    	];

    	$scope.redirectState = function(page){
    		$window.location.href= '/#!/'+page;
		};
		
		$scope.selectProduct = function(item){
			$window.location.href= '/#!/product/'+item;
		};

  }]);

  angular.module('archeTradesApp')
  .controller('productCtrl', ['$scope', '$window', '$routeParams', function ($scope, $window, $routeParams) {
    	console.log($window);

    	$scope.items = [
    		{'name' : 'Furniture', 'qunatityAvailable': '15', 'src': 'images/f1.jpg'},
    		{'name' : 'Lightings', 'qunatityAvailable': '12', 'src': 'images/f2.jpg'},
    		{'name' : 'Paintings', 'qunatityAvailable': '11', 'src': 'images/f3.jpg'},
    		{'name' : 'Wooden Articles', 'qunatityAvailable': '33', 'src': 'images/f4.jpg'},
    		{'name' : 'Dining Table', 'qunatityAvailable': '43', 'src': 'images/f5.jpg'},
    		{'name' : 'Table Fan', 'qunatityAvailable': '22', 'src': 'images/f6.jpg'},
    	];

    	$scope.redirectState = function(page){
    		$window.location.href= '/#!/'+page;
    	};

  }]);

// Filter component ========================

  //can reference model instead of creating a global variable
  angular.module('archeTradesApp').controller('angularController', 
                                           ['$scope','ProductDataService', function($scope, ProductDataService) { 
    var products = ProductDataService.getSampleData();
    $scope.Fruits = products; //use $scope to expose to the view

    //create checkbox filters on the fly with dynamic data
    var filters = [];
    _.each(products, function(product) {
      _.each(product.properties, function(property) {      
        var existingFilter = _.findWhere(filters, { name: property.name });

        if (existingFilter) {
          var existingOption = _.findWhere(existingFilter.options, { value: property.value });
          if (existingOption) {
            existingOption.count += 1;
          } else {
            existingFilter.options.push({ value: property.value, count: 1 }); 
          }   
        } else {
          var filter = {};
          filter.name = property.name;
          filter.options = [];
          filter.options.push({ value: property.value, count: 1 });
          filters.push(filter);      
        }   
      });
    });
    $scope.Filters = filters;

    this.toggleAll = function($event, includeAll) {       
      _.each(filters, function(filterCategory) {      
        _.each(filterCategory.options, function(option) {
          option.IsIncluded = includeAll;
        });
      });    
    };
  }]);

  angular.module('archeTradesApp').filter('dynamicFilter', function () {
    return function (products, filterCategories, scope) {
      var filtered = [];

      var productFilters = _.filter(filterCategories, function(fc) {
        return  _.any(fc.options, { 'IsIncluded': true });
      });

      _.each(products, function(prod) {
        var includeProduct = true;
        _.each(productFilters, function(filter) {
          var props = _.filter(prod.properties, { 'name': filter.name });
          if (!_.any(props, function(prop) { return _.any(filter.options, { 'value': prop.value, 'IsIncluded': true }); })) {
            includeProduct = false;
          }
        });
        if (includeProduct) {
          filtered.push(prod);
        }
      });
      return filtered;
    };
  });

  angular.module('archeTradesApp').service('ProductDataService', function() {
    var service = {};

    //sample data
    var products = [
      {
        name: 'apple',
        properties: [
          { name:'type', value:'fruit' }, { name:'color', value:'red' }, 
          { name:'size', value:'medium' }, { name:'shape', value:'weird' }
        ]
      },{
        name: 'orange',
        properties: [
          { name:'type', value:'fruit' }, { name:'color', value:'orange'},
          { name:'size', value:'medium' }, { name:'shape', value:'sphere'}
        ]
      },{
        name: 'grapefruit',
        properties: [
          { name:'type', value:'fruit' }, { name:'color', value:'yellow' },
          { name:'size', value:'large' }, { name:'shape', value:'sphere' }
        ]
      },{
        name: 'lemon',
        properties: [
          { name:'type', value:'fruit' }, { name:'color', value:'yellow' },
          { name:'size', value:'small' }, { name:'shape', value:'lemon' }
        ]
      },{
        name: 'lime',
        properties: [
          { name:'type', value:'fruit' }, { name: 'color', value: 'green' },
          { name:'size', value:'small' }, { name: 'shape', value: 'lemon' }
        ]
      },{
        name:'pepper',
        properties: [
          { name:'type', value:'vegetable' }, { name:'color', value:'red' },
          { name:'size', value:'medium' }, { name:'shape', value:'weird' }
        ]
      }    
    ];

    service.getSampleData = function() {
      return products;
    };

    return service;
  });
// Filter Ends


  angular.module('archeTradesApp')
  .controller('furnitureCtrl', ['$scope', '$window', function ($scope, $window) {
    	console.log($window);

    	$scope.filterproducts=function(){
    		$scope.searchResults = true;
    	};
    	$scope.items = [
    		{'name' : 'Furniture - 1', 'qunatityAvailable': '15', 'src': 'images/f1.jpg'},
    		{'name' : 'Furniture - 2', 'qunatityAvailable': '12', 'src': 'images/f2.jpg'},
    		{'name' : 'Furniture - 3', 'qunatityAvailable': '11', 'src': 'images/f3.jpg'},
    		{'name' : 'Furniture - 4', 'qunatityAvailable': '33', 'src': 'images/f4.jpg'},
    		{'name' : 'Furniture - 5', 'qunatityAvailable': '43', 'src': 'images/f5.jpg'},
    		{'name' : 'Furniture - 6', 'qunatityAvailable': '22', 'src': 'images/f6.jpg'},
    	];

    	$scope.redirectState = function(page){
    		$window.location.href= '/#!/'+page;
    	};
		$scope.showExpandAll= true;
    	$scope.changeValue = function(){
    		$scope.showExpandAll = !$scope.showExpandAll;
    	};


    	//try With Object

    	$scope.mainObj = {
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
    	};
    	$scope.keyName = Object.keys($scope.mainObj.furniture);
    	$scope.firstRootObjNames = [];
    	$scope.secondRootObjNames = [];
    	for(var i=0;i<$scope.keyName.length.length;i++){
    		$scope.firstRootObj[i] = false;
    	}
    	$scope.secondObj=[];
    	
    	$scope.SelectAll = function(rootObj){
    		for(var i=0;i<$scope.mainObj.furniture.length;i++){
    			if(Object.keys($scope.mainObj.furniture[i].toString()===rootObj)){
    				console.log($scope.mainObj.furniture[i][rootObj]);
    				for(var j=0;j<1;j++){
    					$scope.secondObj[j] = true;
    				}			
    			}	
    		}
    		
    	};
    	$scope.filterproducts=function(){
    		$scope.searchResults = true;
    	};
  }]);