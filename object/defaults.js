var copy = require("./copy")
/**
 * Return a new object with extended keys to contain default values.
 *
 * @param {Object} options
 * @param {Object} defaultValues
 *
 * @return {Object} merged object
 * */
module.exports = function defaults(options, defaultValues) {
  if (!options) {
    return copy(defaultValues)
  }

  var obj = copy(options)

  for (var prop in defaultValues) {
    if (defaultValues.hasOwnProperty(prop) && !options.hasOwnProperty(prop)) {
      obj[prop] = defaultValues[prop]
    }
  }

  return obj
}
