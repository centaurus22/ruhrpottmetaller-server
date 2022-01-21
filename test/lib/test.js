const assert = require('assert');
const database = require('../../lib/database.js');

suite('database.js', function() {
    test('should return an object', function() {
        assert.equal(typeof database, 'object');
    });
});
