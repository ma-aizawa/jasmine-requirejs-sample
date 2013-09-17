'use strict';

requirejs(['./util'], function(util) {
  describe('hoge', function() {
    it('should hoge', function() {
      console.log('should hoge');
      expect('hoge').toBe('hoge');
    });

    it('should define util', function() {
      expect(util).not.toBe(undefined);
    });
  });
});

