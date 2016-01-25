var extend = require("./extend")

/**
 * Extends a constructor's prototype with one or more constructor or prototype object
 *
 * @param {Function} Constructor
 * @param {Function|Object} Other
 *
 * @return {Function} Constructor
 * */
module.exports = function include(Constructor, Other) {
  if (Array.isArray(Other)) {
    Other.forEach(function(Other) {
      if (typeof Other == "function") {
        extend(Constructor, Other.prototype)
      }
      else if (typeof Other == "object") {
        extend(Constructor, Other)
      }
    })
  }
  else {
    if (typeof Other == "function") {
      extend(Constructor, Other.prototype)
    }
    else if (typeof Other == "object") {
      extend(Constructor, Other)
    }
  }

  return Constructor
}
