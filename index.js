var sassport = require('sassport');
var SVGO = require('svgo');
var fs = require('fs');
var path = require('path');

svgo = new SVGO();

module.exports = sassport
  .module('svgo')
  .functions({
    'svg($data)': sassport.wrap(function(data, done) {
      console.log(svgo.optimize);

      svgo.optimize(data, function(result) {
        result = "url('data:image/svg+xml;utf8,"
          + result.data
          + "')";

        done(result);
      })
    })
  });