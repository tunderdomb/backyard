module.exports = function augment(Class, mixin) {
  if (Array.isArray(mixin)) {
    mixin.forEach(function(func) {
      if (typeof func == "function") {
        func.call(Class.prototype)
      }
    })
  }
  else if (typeof mixin == "function") {
    mixin.call(Class.prototype)
  }

  return Class
}
