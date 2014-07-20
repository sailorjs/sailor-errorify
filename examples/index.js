var errorify          = require("../");

var json = function(obj) {
  console.log(JSON.stringify(obj));
};

/**
 *  Response with standard Error JSON, like:
 *  - Custom Error code. 500 by default
 *  - Optional message
 */
console.log("--- ERROR ---");
json(errorify.error());
json(errorify.error({
  status: '503',
  type: 'E_CUSTOM',
  object: ['foo', 'bar', {
    baz: true
  }],
  summary: 'Error on validation'
}));

/**
 * Response with Error Validation JSON, like:
 * - 400 status code
 * - Name of the model
 * - Optional number of attributes of the model, with
 *   · rule that validate it
 *   · message in validation
 */
console.log("\n--- VALIDATION ERROR ---");
var obj_one = {
  model: "MyModel"
};

var attr_one = {
  name: "attr_one",
  rule: "rule",
  message: "msg one"
};
var attr_two = {
  name: "attr_two",
  rule: "rule",
  message: "msg two"
};

var obj_two = {
  model: "MyModel",
  attributes: [attr_one]
};

var obj_three = {
  model: "MyModel",
  attributes: [attr_one, attr_two]
};

json(errorify.errorValidation(obj_one));
json(errorify.errorValidation(obj_two));
json(errorify.errorValidation(obj_three));
