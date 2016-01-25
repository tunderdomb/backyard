/**
 * Run a mapping callback on an object.
 *
 * @param {Object} obj
 * @param {Function} callback(* value, String key, Object obj)
 *
 * @return {Object}
 * */
module.exports = function(obj, callback) {
  var ret = {}
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      ret[prop] = callback(obj[prop], prop, obj)
    }
  }
  return ret
}
