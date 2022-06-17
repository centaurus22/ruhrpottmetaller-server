const model = require('../lib/model.js');
let testDatabaseConnection = require('./testLib/testDatabaseConnection');
const assert = require('assert');

describe('model.js', function() {
  before(function () {
    testDatabaseConnection.connect();
  });

  afterEach(function () {
    const sql = 'TRUNCATE TABLE event';
    testDatabaseConnection.query(sql, function (error) {
      if (error) {
        throw error;
      }
    });
  });

  after(function () {
    testDatabaseConnection.end();
  });

});
