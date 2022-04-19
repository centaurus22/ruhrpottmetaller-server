const assert = require('assert');
const database = require('../lib/databaseConnection.js');
const Connection = require('mysql/lib/Connection');

describe('databaseConnection.js', function() {
  it('should return an object', function() {
    assert.equal(typeof database, 'object');
  });

  it('should return a connection object', function() {
    assert.equal(database instanceof Connection, true);
  });
});
