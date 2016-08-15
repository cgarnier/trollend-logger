# trollend-logger
trollend logger component

## Install

`npm install --save trollend-logger`
## Usage

```
const Logger = require('trollend-logger')
const streamify = require('stream-array')
const concat = require('concat-stream')

let sample = [{a: 1}, {a: 2}, {a: 1}, {a: 3}, {a: 3}, {a: 4}, {a: 1}, {a: 5}]

    streamify(sample)
      .pipe(new Logger({objectMode: true}))
      .pipe(/* ... */)
  })
})

```

## Methods

### setFn

By default, it logs in console but you can override the logging methods to use
something else.

```
.pipe(new Logger({objectMode: true})
  .setFn(function (value) {
      console.log( 'info: ', value)
    }))
```
