var request = require('./request');
var app = require('../../server');
require('./cucumberShould');

module.exports = function WorldConstructor(callback) {

  var world = {
    request: request,
    app: app,
    lastResponse: {}
  };

  callback(world);
};