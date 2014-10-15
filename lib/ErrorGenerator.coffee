## -- Dependencies --------------------------------------------------------

expressValidator = require 'express-validator-errors'
isInitialize     = false

## -- Class ---------------------------------------------------------------

class ErrorGenerator

  ## -- Private -----------------------------------------------------------

  @_init: ->
    isInitialize = true
    @_errors = []

  @_reset: ->
    @_errors = []

  @_addError: (param, message, value) ->
    @_errors.push param: param, msg: message, value:value

  ## -- API ---------------------------------------------------------------

  @add: (param, message, value) ->
    @_init() unless isInitialize
    @_addError(param, message, value)
    this

  @end: (res, type) ->
    response = res[type](expressValidator.serialize(@_errors))
    @_reset()
    response

## -- Exports -------------------------------------------------------------

exports = module.exports = ErrorGenerator
