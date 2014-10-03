/**
 * Dependencies
 */
var _                = require('lodash');
var util             = require("./lib/util");
var expressValidator = require('express-validator-errors');

var errorify = _.assign(expressValidator, util);

/**
 * Exports
 */
exports = module.exports = errorify;
