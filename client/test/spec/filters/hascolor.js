'use strict';

describe('Filter: hasColor', function () {

  // load the filter's module
  beforeEach(module('clientApp'));

  // initialize a new instance of the filter before each test
  var hasColor;
  beforeEach(inject(function ($filter) {
    hasColor = $filter('hasColor');
  }));

  it('should return the input prefixed with "hasColor filter:"', function () {
    var text = 'angularjs';
    expect(hasColor(text)).toBe('hasColor filter: ' + text);
  });

});
