'use strict';

describe('Controller: AvatarsCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var AvatarsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AvatarsCtrl = $controller('AvatarsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AvatarsCtrl.awesomeThings.length).toBe(3);
  });
});
