
const Logger = require('../lib/index')
const streamify = require('stream-array')
const concat = require('concat-stream')
const assert = require('chai').assert
const os = require('os')

let sample = [{a: 1}, {a: 2}, {a: 1}, {a: 3}, {a: 3}, {a: 4}, {a: 1}, {a: 5}]

let logs = []
function logFn (chunk) {
  console.log(chunk)
  logs.push(chunk)
}
describe('Simple log', () => {
  it('Should be able to print logs', (done) => {
    logs = []
    streamify(sample)
      .pipe(new Logger({objectMode: true})
        .setFn(logFn)
      )
      .pipe(concat((data) => {
        assert.strictEqual(sample.length, logs.length, 'length dont match')
        done()
      }))
  })
})
