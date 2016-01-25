/**
 * Apply one or more functional mixins to a constructor's prototype.
 *
 * @param {Function} Constructor
 * @param {Function|Function[]} mixin
 *
 * @return {Function} Constructor
 * */
module.exports = function augment(Constructor, mixin) {
  if (Array.isArray(mixin)) {
    mixin.forEach(function(func) {
      if (typeof func == "function") {
        func.call(Constructor.prototype)
      }
    })
  }
  else if (typeof mixin == "function") {
    mixin.call(Constructor.prototype)
  }

  return Constructor
}
