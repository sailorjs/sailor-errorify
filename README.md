# Errorify for Sailor

> Normalize Error for Sailor Plugins

## Install

```
npm install -g sailor-errorify
```

## Usage

```
var errorify = require("sailor-errorify");
```

## API

### .error()

Create a new standard error with:

* error: `"E_UNKNOWN"`
* status: `500`
* summary: `"Encountered an unexpected error"`

All values can be modified with a object as argument. Example:

```
errorify.error({
	error: 503,
	status: "E_CUSTOM",
	summary: "Error in the model!"
});
```
 
### .errorValidation()

Create a new validation error based on Sails Waterline, with:

* error: `"E_VALIDATION"`
* status: `400`
* Array of optional number of attributes

The attributes can follow the schema:

* name: `"name of the attribute"`
* rule: `"rule to evaluate"`
* message: `"message of error"`

Example:

```
var attr = {
  name: "attr_one",
  rule: "rule",
  message: "msg one"
};

var object = {
  model: "MyModel",
  attributes: [attr]
};

errorify.errorValidation(object)
```



For more information see the file `examples/index.js`

## License

MIT © [Kiko Beats](http://kikobeats.com/)


