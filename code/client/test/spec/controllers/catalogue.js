'use strict';

describe('Controller: CatalogueCtrl', function () {

  // load the controller's module
  beforeEach(module('archeTradesApp'));

  var CatalogueCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CatalogueCtrl = $controller('CatalogueCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CatalogueCtrl.awesomeThings.length).toBe(3);
  });
});
