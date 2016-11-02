'use strict';

describe('Controller: AvatarCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var AvatarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AvatarCtrl = $controller('AvatarCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AvatarCtrl.awesomeThings.length).toBe(3);
  });
});
