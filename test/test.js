/**
 * Dependencies
 */
var should   = require("should");
var assert   = require("assert");
var errorify = require("../");
var WLError  = require("../lib/WLError").WLError();


describe('New Error', function() {

  describe('without arguments', function() {
    it("should be 500 status", function() {
      var err = errorify.error();
      err.status.should.eql(500);
      err.should.be.an.instanceOf(WLError);
    });
  });

  describe('with arguments', function() {
    it('custom status', function() {
      var err = errorify.error({status: 503});
      err.status.should.eql(503);
      err.should.be.an.instanceOf(WLError);
    });

  });
});

describe('New Validation Error', function() {

  describe('without attributes', function() {
    it("should be 400 status", function() {
      var err = errorify.errorValidation({model: "MyModel"});
      err.status.should.eql(400);
      err.model.should.eql("MyModel");
      err.should.be.an.instanceOf(WLError);
    });
  });

  describe('with attributes', function() {
    it("should be 400 status", function() {

      var attr_one = {
        name: "attr_one",
        rule: "rule",
        message: "msg one"
      };

      var attr_two = {
        name: "attr_two",
        rule: "rule",
        message: "msg two"
      };

      var obj = {
        model :"MyModel",
        attributes: [attr_one, attr_two]
      };

      var err = errorify.errorValidation(obj);
      err.status.should.eql(400);
      err.model.should.eql("MyModel");
      err.should.be.an.instanceOf(WLError);
    });
  });

});
