/**
 * Dependencies
 */
var WLError           = require ('./lib/WLError').new_WLError;
var WLValidationError = require ('./lib/WLValidationError');
var WLSuccess         = require ('./lib/WLSuccess');


/**
 * Exports
 */
module.exports = {
  error           : WLError,
  errorValidation : WLValidationError,
  success         : WLSuccess
};
