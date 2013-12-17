function log(data){ console.log(data); }
console.time('Execution Time');


// js/app.js

var app = app || {};
var ENTER_KEY = 13;

$(function() {

  // Kick things off by creating the **App**.
  new app.AppView();

});

console.timeEnd('Execution Time');
