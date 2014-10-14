## -- Dependencies -----------------------------------------------------------------------

errorify  = require '..'
should    = require 'should'
res       = notFound: (e) -> e

## -- Test ------------------------------------------------------------------------------

describe "Errorify ::", ->

  it 'generate a new error with one add', ->
    username = undefined
    response = { errors: [ { param: 'username', msg: 'not username found', value: undefined } ] }

    value = errorify
    .add('username', 'not username found', username)
    .end(res, 'notFound')
    .should.eql response

  it 'generate a new error with two adds', ->
    username = undefined
    email = undefined
    response = { errors: [ { param: 'username', msg: 'not username found', value: undefined }, { param: 'email', msg: 'not email found', value: undefined } ] }

    value = errorify
    .add('username', 'not username found', username)
    .add('email', 'not email found', email)
    .end(res, 'notFound')
    value.should.eql response
