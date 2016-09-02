<h1 align="center">
  <!-- Logo -->
  <img src="https://raw.githubusercontent.com/rill-js/rill/master/Rill-Icon.jpg" alt="Rill"/>
  <br/>
  @rill/stats
	<br/>

  <!-- Stability -->
  <a href="https://nodejs.org/api/documentation.html#documentation_stability_index">
    <img src="https://img.shields.io/badge/stability-stable-brightgreen.svg?style=flat-square" alt="API stability"/>
  </a>
  <!-- Standard -->
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="Standard"/>
  </a>
  <!-- NPM version -->
  <a href="https://npmjs.org/package/@rill/stats">
    <img src="https://img.shields.io/npm/v/@rill/stats.svg?style=flat-square" alt="NPM version"/>
  </a>
  <!-- Downloads -->
  <a href="https://npmjs.org/package/@rill/stats">
    <img src="https://img.shields.io/npm/dm/@rill/stats.svg?style=flat-square" alt="Downloads"/>
  </a>
  <!-- Gitter Chat -->
  <a href="https://gitter.im/rill-js/rill">
    <img src="https://img.shields.io/gitter/room/rill-js/rill.svg?style=flat-square" alt="Gitter Chat"/>
  </a>
</h1>

Adds a simple browser performance monitoring to a Rill app.
The performance monitoring is powered by [stats.js](https://github.com/mrdoob/stats.js).

# Installation

```console
npm install @rill/stats
```

# Example

```javascript
var app = require('rill')()
var stats = require('@rill/stats')

// Every request will be measured with stats.js.
app.use(stats({ mode: "ms" }))
```

# Default modes
#### (Click on the frame to switch between modes).

```js
{
	"ms" // monitor (avg) ms during requests.
	"mb" // monitor current MBytes of allocated memory.
	"fps"// monitor (avg) fps during requests (typically useless).
}
```

# Production Use

@rill/stats exposes a noop function when "process.env.NODE_ENV" is true.
This allows for build tools such as babel, browserify or webpack to remove this functionality for production sites.

### Contributions

* Use `npm test` to run tests.

Please feel free to create a PR!
