/**
 * Dependencies
 */
var WLError           = require ('./lib/WLError').new_WLError;
var WLValidationError = require ('./lib/WLValidationError');
var expressValidator  = require('express-validator-errors');
var _                 = require('lodash');


/**
 * Exports
 */
var errorify = _.assign(expressValidator, {
  custom     : WLError,
  waterline  : WLValidationError
});

exports = module.exports = errorify;
