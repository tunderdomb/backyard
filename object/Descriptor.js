module.exports = Descriptor

var propWritable = "_writable"
var propEnumerable = "_enumerable"
var propConfigurable = "_configurable"

function Descriptor(writable, enumerable, configurable) {
  this.value(this, propWritable, writable || false)
  this.value(this, propEnumerable, enumerable || false)
  this.value(this, propConfigurable, configurable || false)

  this.getter(this, "w", function() {
    return this.writable
  })
  this.getter(this, "writable", function() {
    return new Descriptor(true, enumerable, configurable)
  })

  this.getter(this, "e", function() {
    return this.enumerable
  })
  this.getter(this, "enumerable", function() {
    return new Descriptor(writable, true, configurable)
  })

  this.getter(this, "c", function() {
    return this.configurable
  })
  this.getter(this, "configurable", function() {
    return new Descriptor(writable, enumerable, true)
  })
}

Descriptor.prototype = {
  accessor: function(obj, name, getter, setter) {
    Object.defineProperty(obj, name, {
      enumerable: this[propEnumerable],
      configurable: this[propConfigurable],
      get: getter,
      set: setter
    })
    return this
  },
  getter: function(obj, name, fn) {
    Object.defineProperty(obj, name, {
      enumerable: this[propEnumerable],
      configurable: this[propConfigurable],
      get: fn
    })
    return this
  },
  setter: function(obj, name, fn) {
    Object.defineProperty(obj, name, {
      enumerable: this[propEnumerable],
      configurable: this[propConfigurable],
      set: fn
    })
    return this
  },
  value: function(obj, name, value) {
    Object.defineProperty(obj, name, {
      writable: this[propWritable],
      enumerable: this[propEnumerable],
      configurable: this[propConfigurable],
      value: value
    })
    return this
  },
  method: function(obj, name, fn) {
    Object.defineProperty(obj, name, {
      writable: this[propWritable],
      enumerable: false,
      configurable: this[propConfigurable],
      value: fn
    })
    return this
  },
  property: function(obj, name, value) {
    Object.defineProperty(obj, name, {
      writable: this[propWritable],
      enumerable: false,
      configurable: this[propConfigurable],
      value: value
    })
    return this
  },
  constant: function(obj, name, value) {
    Object.defineProperty(obj, name, {
      writable: false,
      enumerable: false,
      configurable: false,
      value: value
    })
    return this
  }
}
