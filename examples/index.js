var WLValidationError = require("waterline/lib/waterline/error/WLValidationError");
var WLUsageError      = require("waterline/lib/waterline/error/WLUsageError");
var WLError           = require("waterline/lib/waterline/error/WLError");
var errorify          = require("waterline/lib/waterline/error");
var responsify        = require('../');

var json = function(obj) {
  console.log(JSON.stringify(obj));
};

/**
 *  Response with standard Error JSON, like:
 *  - Custom Error code. 500 by default
 *  - Optional message
 */
// console.log("--- ERROR ---");
// json(responsify.error());
// json(responsify.error({
//   status: '503',
//   type: 'E_CUSTOM',
//   object: ['foo', 'bar', {
//     baz: true
//   }],
//   summary: 'Error on validation'
// }));

/**
 * Response with Error Validation JSON, like:
 * - 400 status code
 * - Name of the model
 * - Optional number of attributes of the model, with
 *   · rule that validate it
 *   · message in validation
 */
// console.log("\n--- VALIDATION ERROR ---");
// var obj_one = {
//   model: "MyModel"
// };

// var attr_one = {
//   name: "attr_one",
//   rule: "rule",
//   message: "msg one"
// };
// var attr_two = {
//   name: "attr_two",
//   rule: "rule",
//   message: "msg two"
// };

// var obj_two = {
//   model: "MyModel",
//   attributes: [attr_one]
// };

// var obj_three = {
//   model: "MyModel",
//   attributes: [attr_one, attr_two]
// };

// json(responsify.errorValidation(obj_one));
// json(responsify.errorValidation(obj_two));
// json(responsify.errorValidation(obj_three));


/**
 * Response with Success JSON, like:
 *  - 200 status code
 *  - Optional message
 */
 // console.log("\n--- SUCESS ---");
// responsify.success();
// responsify.success({
//   status: 203
// });
// responsify.success({
//   summary: "Great Work!"
// });
// responsify.success({
//   status: 203,
//   summary: "Great Work!"
// });

