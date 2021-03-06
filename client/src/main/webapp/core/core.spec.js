'use strict';

describe('core module', function () {

  beforeEach(module('fabs.boilerplate.core'));

  describe('w11k service', function () {

    it('should use http to query data from server', inject(function (w11kService, $httpBackend, w11kMockData, $rootScope) {
      $httpBackend.expectGET('/service/product/list');

      expect(w11kService.get()).toBeDefined();

      //w11kService.get().then(function (result) {
      //  expect(result).toBeDefined();
      //});


      // makes the test sync again
      $httpBackend.flush();
      $rootScope.$digest();
    }));

  });

});
