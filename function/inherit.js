/**
 * Inherit from another constructor
 *
 * @param {Function} Constructor
 * @param {Function} Base
 *
 * @return {Function} Class
 * */
module.exports = function inherit(Constructor, Base) {
  Constructor.prototype = Object.create(Base.prototype)
  Constructor.prototype.constructor = Constructor

  return Constructor
}
