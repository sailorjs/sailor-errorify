/**
 * Dependencies
 */
var expressValidator  = require('express-validator-errors');
var _                 = require('lodash');

var errorify = _.assign(expressValidator, {});

/**
 * Exports
 */
exports = module.exports = errorify;
