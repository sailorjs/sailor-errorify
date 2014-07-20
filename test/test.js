/**
 * Dependencies
 */
var WLError   = require("waterline/lib/waterline/error/WLError");
var should    = require("should");
var assert    = require("assert");
var validator = require("../");


describe('Error with empty object', function() {
  it('Should be 400 badRequest', function() {

    var err = validator.newError({});
    err.status.should.eql(400);
    err.should.be.an.instanceOf(WLError);
    err.invalidAttributes.should.eql({});

  });
});
