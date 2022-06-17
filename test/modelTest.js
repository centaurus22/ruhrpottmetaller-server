const model = require('../lib/model');
const event = require('../lib/datasets/eventDataset');
let testDatabaseConnection = require('./testLib/testDatabaseConnection');
const assert = require('chai').assert;

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

  describe('getDataset()', function() {
    it('should return the event object', function() {
      const Event = new event;
      const Model = new model(null, Event);
      assert.isObject(Model.getDataset());
      assert.instanceOf(Model.getDataset(), event);
    });
  });
});
