'use strict';

/**
 * @ngdoc function
 * @name archeTradesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the archeTradesApp
 */
angular.module('archeTradesApp')
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });


angular.module('archeTradesApp')
  .controller('SignUpCtrl', ['$scope', '$window', '$http', function ($scope, $window, $http) {
    $scope.errorArray = [];
    $scope.password1='';
    $scope.password2='';
    $scope.signup = function(){
    	$scope.errorArray = [];
    	if(!signUpForm.classList.contains('ng-invalid')){
    		if($scope.password1===''|| $scope.password2===''){
    			$scope.errorArray.push('Password Missing');
		    	$scope.showMsg = true;
    		}
    		else{
    			if(($scope.password1 !== $scope.password2)){
		    		$scope.errorArray.push('Password Mismatch');
		    		$scope.showMsg = true;
		    	}
		    	else{
		    		$scope.showMsg = false;
		    		$window.location.href = '/#!/signin';
		    	}
    		}
    	}
    	else{
    		var dummyMsg = 'Please fill out this field.';
    		$scope.errorArray.push((document.getElementById('fname').validationMessage === dummyMsg) ? 'Name is Missing' : document.getElementById('fname').validationMessage);
    		$scope.errorArray.push((document.getElementById('cname').validationMessage === dummyMsg) ? 'Organisation is Missing' : document.getElementById('cname').validationMessage);
    		$scope.errorArray.push((document.getElementById('emailID').validationMessage === dummyMsg) ? 'Email Id is Missing' : document.getElementById('emailID').validationMessage);
    		$scope.errorArray.push((document.getElementById('phoneNo').validationMessage === dummyMsg) ? 'Phone Number is Missing' : document.getElementById('phoneNo').validationMessage);
			$scope.showMsg = true;
    	}
    	$window.scrollTo(0,0);
    }; 
    function checkForAvailability(arr){
    	$scope.errorArray = [];
    	$scope.showMsg = true;
    	$scope.errorArray.push('You have already Signed up , Please Click in Forgot Password / Sign In');
    	return (arr.data.AllLoggedData.indexOf($scope.phoneNo) > -1);
    }

    $scope.checkForExistence = function(){
    	$http.get('../json/getLoggedInCredentials.json')
            .then(function(data) { 
               $scope.showForgotPasswordLink = checkForAvailability(data);
            }, function(response){
            	console.log('Error occured'+response);
            });
    };
    $scope.signIn = function(){
    	$scope.showMsg = false;
    	$window.location.href = '/#!/signin';
    };
    $scope.forgotPassword = function(){
    	$scope.errorArray = [];
    	$scope.showMsg = true;
    	$scope.errorArray.push('We have Mailed you the temporary Password');
    };

  }]);
