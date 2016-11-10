'use strict';

describe('Directive: parseStyle', function () {

  // load the directive's module
  beforeEach(module('clientApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<parse-style></parse-style>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the parseStyle directive');
  }));
});
