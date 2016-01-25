/**
 * Extend an object with another
 *
 * @param {Object} obj
 * @param {Object} extension
 *
 * @return {Object} obj
 * */
module.exports = function extend(obj, extension) {
  for (var name in extension) {
    if (extension.hasOwnProperty(name)) obj[name] = extension[name]
  }
  return obj
}
