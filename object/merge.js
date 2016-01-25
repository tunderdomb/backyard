var extend = require("./extend")

/**
 * Merge two objects and return a new object.
 *
 * @param {Object} base
 * @param {Object} extension
 *
 * @return {Object} base
 * */
module.exports = function(base, extension) {
  return extend(extend({}, base), extension)
}
