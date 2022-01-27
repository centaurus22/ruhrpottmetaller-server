const assert = require('assert');
const database = require('../../lib/databaseConnection.js');
const Connection = require("mysql/lib/Connection");

suite('databaseConnection.js', function() {
    test('should return an object', function() {
        assert.equal(typeof database, 'object');
    });

    test('should return a connection object', function() {
        assert.equal(database instanceof Connection, true)
    });
});
