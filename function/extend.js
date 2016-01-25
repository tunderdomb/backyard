/**
 * Extend a single constructor's prototype with a prototype object
 * copying methods with the same property descriptor.
 *
 * @param {Function} Constructor
 * @param {Object} prototype
 *
 * @return {Function} Constructor
 * */
module.exports = function extend(Constructor, prototype) {
  Object.getOwnPropertyNames(prototype).forEach(function(name) {
    if (name !== "constructor") {
      var descriptor = Object.getOwnPropertyDescriptor(prototype, name)
      Object.defineProperty(Constructor.prototype, name, descriptor)
    }
  })

  return Constructor
}
