/**
 * Safely iterate on an object
 *
 * @param {Object} obj
 * @param {Function} callback(String key, * value, Object obj)
 *
 * @return {Object} obj
 * */
module.exports = function(obj, callback) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      callback(prop, obj[prop], obj)
    }
  }
  return obj
}
