/**
 * Dependencies
 */
var CoffeeScript    = require("coffee-script");
var expressValidator = require('express-validator-errors');
var _                = require('lodash');
var ErrorGenerator   = require("./lib/ErrorGenerator");

// Register CoffeeScript if exits
if(CoffeeScript.register) CoffeeScript.register();

var errorify = _.assign(expressValidator, ErrorGenerator);

/**
 * Exports
 */
exports = module.exports = errorify;
