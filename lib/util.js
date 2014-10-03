module.exports = {
  addError: function(array, param, msg) {
    array.push({
      param: param,
      msg: msg
    });
    return array;
  }
};
