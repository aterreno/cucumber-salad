require('../support/cucumberShould');

module.exports = function World(callback) {

  var self = this; 
  var request = require('request');

  this.get = function (endpoint, callback) {
    request.get({
        url: endpoint
      },
      function (error, response, body) {
        if (!error) {
          self.lastResponse = response;
          callback();
        } else {
          callback.fail("Request Failed: body:" + body + ", error:" + error);
        }
      }
    );
  };

  this.app = require('../../server');
  callback(this);
};