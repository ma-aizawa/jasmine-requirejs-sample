// define(['jquery'], function($) {//   var util = {};//   util.kick = function() {//     $('#btn').on('click', function() {//       $('#hoge').append('<br>click!');//     });//   };////   return util;// });

'use strict';

define(function() {
  var util = {};
  util.kick = function kick() {
    console.log('kick');
    document.getElementById('btn').onclick = function() {
      document.getElementById('hoge').innerHTML += '<br>click!';
    };
  };

  return util;
});

