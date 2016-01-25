var extend = require("./extend")

/**
 * Shallow copy an object
 *
 * @param {Object} obj
 *
 * @return {Object} a copy of the object
 * */
module.exports = function(obj) {
  return extend({}, obj)
}
