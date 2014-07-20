var WLError         = require ('./lib/WLError').new_WLError;
var errorValidation    = require ('./lib/WLValidationError');


/**
 * Exports
 */
module.exports = {
  error           : WLError,
  errorValidation : errorValidation
};
