var should = require('should');

module.exports = function () {

  this.World = require("../support/world.js");

  this.Before(function (callback) {
    this.server = this.app.listen(process.env.PORT || 3000, function () {
      callback();
    });
  });

  this.After(function (callback) {
    this.server.close(function() {
      callback();  
    });    
  });

  this.Given(/^A running salad server$/, function (callback) {
    callback();
  });

  this.When(/^I request "([^"]*)"$/, function (endpoint, callback) {
    this.request.get("http://localhost:3000" + endpoint, this, callback);
  });

  this.Then(/^I should get back a (\d+)( error)?$/, function (httpCode, error, callback) {
    should(this.session.lastResponse.statusCode).beEqual(parseInt(httpCode), callback);
    callback();
  });

  this.Then(/^An Italian Salad should have (\d+) tomatoes$/, function (tomatoesNum, callback) {
    var salad = JSON.parse(this.session.lastResponse.body);

    should(salad[0].tomatoes.quantity).beEqual(parseInt(tomatoesNum), callback);
    callback();
  });
};