var request = require('request');

module.exports = {
  get: function (endpoint, self, callback) {

    request.get({        
        url: endpoint
      },
      function (error, response, body) {

        if (!error) {
          self.session.lastResponse = response;
          callback();
        } else {
          callback.fail("Request Failed: body:" + body + ", error:" + error);
        }
      }
    );
  },

};