var request = require('request');

//TODO instead of passing self into here, return the response/error, if possible
module.exports = {
  get: function (endpoint, self, callback) {

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
  },

};