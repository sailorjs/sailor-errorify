/**
 * Module dependencies
 */

var WLError = require('./WLError').WLError();
var util    = require('util');
var _       = require('lodash');



/**
 * WLUsageError
 *
 * @extends WLError
 */
function WLUsageError (properties) {

  // Call superclass
  WLUsageError.super_.call(this, properties);
}
util.inherits(WLUsageError, WLError);


// Override WLError defaults with WLUsageError properties.
WLUsageError.prototype.code =
'E_USAGE';
WLUsageError.prototype.status =
0;
WLUsageError.prototype.reason =
'Invalid usage';


module.exports = WLUsageError;