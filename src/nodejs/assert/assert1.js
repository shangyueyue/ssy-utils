const assert = require('assert');

const a = 1;
const b = true;
// console.log(a == b);
console.log(a === b);
assert.equal(a, b, 'abbbbb');
assert.strictEqual(a, b, 'a===b');
