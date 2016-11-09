'use strict';

describe('Filter: hasProperty', function () {

  // load the filter's module
  beforeEach(module('clientApp'));

  // initialize a new instance of the filter before each test
  var hasProperty;
  beforeEach(inject(function ($filter) {
    hasProperty = $filter('hasProperty');
  }));

  it('should return the input prefixed with "hasProperty filter:"', function () {
    var text = 'angularjs';
    expect(hasProperty(text)).toBe('hasProperty filter: ' + text);
  });

});
