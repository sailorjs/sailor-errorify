<center>![](http://i.imgur.com/vLYNR8r.png)</center>

# Errorify for Sailor

[![Build Status](http://img.shields.io/travis/sailorjs/sailor-errorify/master.svg?style=flat)](https://travis-ci.org/sailorjs/sailor-errorify)
[![Dependency status](http://img.shields.io/david/sailorjs/sailor-errorify.svg?style=flat)](https://david-dm.org/sailorjs/sailor-errorify)
[![Dev Dependencies Status](http://img.shields.io/david/dev/sailorjs/sailor-errorify.svg?style=flat)](https://david-dm.org/sailorjs/sailor-errorify#info=devDependencies)
[![NPM Status](http://img.shields.io/npm/dm/sailor-errorify.svg?style=flat)](https://www.npmjs.org/package/sailor-errorify)
[![Gittip](http://img.shields.io/gittip/Kikobeats.svg?style=flat)](https://www.gittip.com/Kikobeats/)

> Error normalizer for Sailor. Extend [express-validator-errors](https://github.com/ctavan/express-validator) interface.

## Install

```bash
npm install sailor-errorify
```

## Usage

```coffee
errorify = require 'sailor-errorify'
```

or using `sailor` dependency

```coffee
sailor 	 = require 'sailorjs'
errorify = sailor.errorify
```

## API

Ideal for response with error schema, for example:

```coffee
unless user
  return errorify
  .add 'identifier', translate.get('User.NotFound'), user
  .end res, 'notFound'
```

In this case return a `notFound` response:

```json
{
    "errors": [
        {
            "param": "identifier",
            "msg": "Identifier doesn't found"
        }
    ]
}
```


## License

MIT © sailorjs

