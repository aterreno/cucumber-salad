var should = require('should');

module.exports = function () {

  this.World = require("../support/world.js");

  var server;

  this.BeforeFeatures(function (event, callback) {
    server = require('../../server').listen(process.env.PORT || 3000, function () {
      callback();
    });
  });

  this.Given(/^A running salad server$/, function (callback) {
    callback();
  });

  this.When(/^I request "([^"]*)"$/, function (endpoint, callback) {
    this.get("http://localhost:3000" + endpoint, callback);
  });

  this.Then(/^I should get back a (\d+)( error)?$/, function (httpCode, error, callback) {
    should(this.lastResponse.statusCode).beEqual(parseInt(httpCode), callback);
    callback();
  });

  this.Then(/^An Italian Salad should have (\d+) tomatoes$/, function (tomatoesNum, callback) {
    var salad = JSON.parse(this.lastResponse.body);

    should(salad[0].tomatoes.quantity).beEqual(parseInt(tomatoesNum), callback);
    callback();
  });

  this.AfterFeatures(function (event, callback) {
    server.close(function () {
      callback();
    });
  });

};