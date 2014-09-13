/**
 * Dependencies
 */
var expressValidator  = require('express-validator-errors');

var errorify = _.assign(expressValidator, {});

/**
 * Exports
 */
exports = module.exports = errorify;
