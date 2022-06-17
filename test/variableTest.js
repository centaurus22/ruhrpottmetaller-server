const assert = require('assert');
const variable = require('../lib/variable.js');

describe('variable.js', function() {
  describe('getDatabaseColumnName()', function () {
    it('should return the value which is passed by the constructor', function() {
      const variable_1 = new variable('bar');
      assert.equal(variable_1.getDatabaseColumnName(), 'bar');
    });
  });
});
