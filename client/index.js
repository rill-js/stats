'use strict'

if (process.env.NODE_ENV !== 'production') {
  var Stats = require('stats.js')
  var modes = {
    'fps': 0,
    'ms': 1,
    'mb': 2
  }

  module.exports = function (opts) {
    opts = opts || {}
    var mode = 1
    var stats = new Stats()
    if ('mode' in opts) mode = modes[opts.mode]

    var el = stats.domElement
    el.style.position = 'fixed'
    el.style.right = 0
    el.style.bottom = 0
    el.style.zIndex = 99999
    stats.setMode(mode)
    document.body.appendChild(el)

    return function (ctx, next) {
      stats.begin()
      return next()
        .then(stats.end)
        .catch(function (err) {
          stats.end()
          throw err
        })
    }
  }
} else {
  module.exports = function () {}
}
