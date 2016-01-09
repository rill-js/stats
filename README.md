# Rill Stats

Adds a simple browser performance monitoring to a Rill app.
The performance monitoring is powered by [stats.js](https://github.com/mrdoob/stats.js).

# Installation

#### Npm
```console
npm install @rill/stats
```

# Example

```javascript
var stats = require("@rill/stats");

// Every request will be measured with stats.js.
app.use(stats({ mode: "ms" }));
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

### Contributions

* Use gulp to run tests.

Please feel free to create a PR!
