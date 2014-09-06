<center>![](http://i.imgur.com/vLYNR8r.png)</center>

# Errorify for Sailor 

[![Build Status](http://img.shields.io/travis/sailorjs/sailor-errorify/master.svg?style=flat)](https://travis-ci.org/sailorjs/sailor-errorify)
[![Dependency status](http://img.shields.io/david/sailorjs/sailor-errorify.svg?style=flat)](https://david-dm.org/sailorjs/sailor-errorify)
[![Dev Dependencies Status](http://img.shields.io/david/dev/sailorjs/sailor-errorify.svg?style=flat)](https://david-dm.org/sailorjs/sailor-errorify#info=devDependencies)
[![NPM Status](http://img.shields.io/npm/dm/sailor-errorify.svg?style=flat)](https://www.npmjs.org/package/sailor-errorify)
[![Gittip](http://img.shields.io/gittip/Kikobeats.svg?style=flat)](https://www.gittip.com/Kikobeats/)

> Error normalizer for Sailor. Based on [express-validator-errors](https://github.com/ctavan/express-validator).

## Install

```coffeescript
npm install sailor-errorify
```

## Usage

```coffeescript
errorify = require 'sailor-errorify'
```

or using `sailor` dependency

```coffeescript
sailor 	 = require 'sailorjs'
errorify = sailor.errorify
```

## API


### .serialize(\<req>)

Use in combine with [sailor-validator](https://github.com/sailorjs/sailor-validator) for validate. For example:

```coffeescript
req.checkBody('email', translate.get "User.Email.NotFound").notEmpty()
req.checkBody('password', translate.get "User.Password.NotFound").notEmpty()
req.checkBody('password', translate.get "User.Password.Invalid").isAlphanumeric()
req.checkBody('password', translate.get "User.Password.MinLength").isLength(passwordLength)
return next(errorify.serialize(req)) if req.validationErrors()
```

and the output is:

```json
{
    "errors": [
        {
            "param": "email",
            "msg": "Email doesn't found"
        },
        {
            "param": "password",
            "msg": "Password doesn't found"
        },
        {
            "param": "password",
            "msg": "Password invalid. Only numbers and letters"
        },
        {
            "param": "password",
            "msg": "Password doesn't be shorter than 5 characters"
        }
    ]
}
```

### .error()

Create a new standard error following [waterline](https://github.com/balderdashy/waterline) error schema:

* error: `"E_UNKNOWN"`
* status: `500`
* summary: `"Encountered an unexpected error"`

All values can be modified with a object as argument. Example:

```javascript
errorify.error({
	error: 503,
	status: "E_CUSTOM",
	summary: "Error in the model!"
});
```
 
### .errorValidation()


Create a new [waterline](https://github.com/balderdashy/waterline) validator:


* error: `"E_VALIDATION"`
* status: `400`
* Array of optional number of attributes

The attributes can follow the schema:

* name: `"name of the attribute"`
* rule: `"rule to evaluate"`
* message: `"message of error"`

Example:

```javascript
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

For more information see the file [examples/index.js](https://github.com/sailorjs/sailor-errorify/blob/master/examples/index.js)

## License

MIT © [Kiko Beats](http://kikobeats.com/)


