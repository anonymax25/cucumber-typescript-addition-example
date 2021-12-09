
const Adder = require('../build/index').Adder
const assert =  require('chai').assert;

describe('Test Build Adder', function() {
  it('should return the sum', async function() {
      const result = Adder.add(1, 2)
      assert.strictEqual(result, 3);
  });
});
