var errorify          = require("../");

var json = function(obj) {
  console.log(JSON.stringify(obj));
};

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
