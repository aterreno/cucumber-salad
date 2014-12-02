var should = require('should');

module.exports = function (should, Assertion) {

  Assertion.add('beEqual', function (val, callback, description) {
    this.params = {
      operator: 'to be',
      expected: val,
      showDiff: true,
      message: description
    };

    try {
      this.assert(val === this.obj);
    } catch (err) {
      callback.fail(err.message);
    }

  });
};

should.use(require('./cucumberShould'));