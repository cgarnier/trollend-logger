const stream = require('stream')

module.exports = class Logger extends stream.Transform {
  constructor (opts) {
    super(opts)
  }

  _transform (data, enc, next) {
    this.fn = this.fn ? this.fn : function(data) { console.log(data) }
    this.fn(data)
    this.push(data)
    next()
  }

  setFn (fn) {
    this.fn = fn
    return this
  }
}
