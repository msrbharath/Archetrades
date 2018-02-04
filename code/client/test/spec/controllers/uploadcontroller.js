'use strict';

describe('Controller: UploadcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('archeTradesApp'));

  var UploadcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UploadcontrollerCtrl = $controller('UploadcontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UploadcontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
