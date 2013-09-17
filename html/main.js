require.config({
  baseUrl: '../',
  paths: {
    jquery: 'lib/jquery.2.min'
  },
  urlArgs: 't=' + (new Date()).getTime()
});

require(['src/util'], function(util) {
  $(function() {
    util.kick();
  });
});
