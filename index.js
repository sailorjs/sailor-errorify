/**
 * Dependencies
 */
var WLError           = require ('./lib/WLError').new_WLError;
var WLValidationError = require ('./lib/WLValidationError');


/**
 * Exports
 */
module.exports = {
  error           : WLError,
  errorValidation : WLValidationError
};
