const test = require('tape');
const hammingDistance = require('../hamming');

test('hammingDistance', function (t) {
  'use strict';

  t.plan(11);

  t.equal(hammingDistance(), null);
  t.equal(hammingDistance({}, 'foo'), null);
  t.equal(hammingDistance('ab', []), null);
  t.equal(hammingDistance(4), null);
  t.equal(hammingDistance(45, 55), 1);
  t.equal(hammingDistance(55, 55), 0);
  t.equal(hammingDistance(3, 123), null);
  t.equal(hammingDistance('foo', 'foo'), 0);
  t.equal(hammingDistance('for', 'foo'), 1);
  t.equal(hammingDistance('foobar', 'fudbaz'), 3);
  t.equal(hammingDistance('unequal', 'length'), null);
});
