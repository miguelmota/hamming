# hamming

> Calculate the [Hamming distance](https://en.wikipedia.org/wiki/Hamming_distance) between two strings.

The Hamming distance measures the minimum number of substitutions required to change one string into the other of equal length.

# Demo

[https://lab.miguelmota.com/hamming](https://lab.miguelmota.com/hamming)

# Install

```bash
npm install hamming
```

# Usage

```javascript
const hammingDistance = require('hamming');

console.log(hammingDistance('foo', 'foo')); // 0
console.log(hammingDistance('for', 'foo')); // 1
console.log(hammingDistance('foobar', 'fudbaz')); // 3
console.log(hammingDistance('unequal', 'length')); // null
```

Hamming distance requires both strings to have the same length.

# Test

```bash
npm test
```

# License

MIT
