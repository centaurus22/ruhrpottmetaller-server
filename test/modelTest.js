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

  describe('_getProperties()', function () {
    it(
      'should return an Array with the property name if a dataset with one property is provided',
      function () {
        const dataset = class dataset {
          _url = null;
        };
        const Model = new model(null, new dataset);
        assert.equal(Model._getProperties() instanceof Array, true);
        assert.equal(Model._getProperties().length, 1);
        assert.equal(Model._getProperties()[0], '_url');

    });

    it('should return an Array with property names', function() {
      const dataset = class dataset {
        _url = null;
        _name = null;
      };
      const Model = new model(null, new dataset);
      assert.equal(Model._getProperties() instanceof Array, true);
      assert.equal(Model._getProperties().length, 2);
      assert.equal(Model._getProperties()[0], '_url');
      assert.equal(Model._getProperties()[1], '_name');
    });
  });

  describe('_getDatasetName()', function () {
    it('should return the name of the dataset', function () {
      const eventDataset = class eventDataset {
        _url = null;
      };
      const Model = new model(null, new eventDataset);
      assert.equal(Model._getDatasetName(), 'event');
    });

    it('should return the name of the testDataset', function () {
      const testDataset = class testDataset {
      };
      const Model = new model(null, new testDataset());
      assert.equal(Model._getDatasetName(), 'test');
    });

    it(
      'should throw an error if the object name does not end with "Dataset"',
      function () {
        const testDataset = class testDataset {
        };
        const Model = new model(null, testDataset);
        assert.throws(
          () => Model._getDatasetName(),
          Error,
          'The Dataset name must end with "Dataset".'
        );
    });
  });
});
