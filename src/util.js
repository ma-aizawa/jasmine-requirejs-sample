define(['jquery'], function($) {
  var util = {};
  util.kick = function() {
    $('#btn').on('click', function() {
      $('#hoge').append('<br>click!');
    });
  };

  return util;
});
