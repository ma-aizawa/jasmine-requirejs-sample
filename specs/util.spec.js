'use strict';

requirejs(['./util'], function(util) {
  describe('util.js', function() {
    it('should defined', function() {
      expect(util).not.toBe(undefined);
    });
  });
});

