const model = require('../lib/model.js');
const assert = require('assert');

suite('model.js', function() {
  test(
    '_getProperties() of a Dataset with one property should return an Array with the property name without _',
    function() {
      const dataset = class dataset {
        _url = null;
      };
      const Model = new model(new dataset);
      assert.equal(Model._getProperties() instanceof Array, true);
      assert.equal(Model._getProperties().length, 1);
      assert.equal(Model._getProperties()[0], 'url');
  });

  test(
    '_getProperties() of a Dataset with properties should return an Array with property names without _',
    function() {
      const dataset = class dataset {
        _url = null;
        _name = null;
      };
      const Model = new model(new dataset);
      assert.equal(Model._getProperties() instanceof Array, true);
      assert.equal(Model._getProperties().length, 2);
      assert.equal(Model._getProperties()[0], 'url');
      assert.equal(Model._getProperties()[1], 'name');
  });

  test('_getDatasetName() should return the name of the dataset', function() {
    const eventDataset = class eventDataset {
      _url = null;
    };
    const Model = new model(new eventDataset);
    assert.equal(Model._getDatasetName(), 'event');
  });

  test(
    '_getDatasetName() should return the name of the testDataset',
    function() {
      const testDataset = class testDataset {};
      const Model = new model( new testDataset());
      assert.equal(Model._getDatasetName(), 'test');
  });

  test(
    '_getDatasetName() should throw an error if the object name does not end with "Dataset"',
    function() {
      const testDataset = class testDataset {};
      const Model = new model(testDataset);
      assert.throws(
        () => Model._getDatasetName(),
        Error,
        'The Dataset name must end with "Dataset".'
      );
  });

  test(
    '_getDatasetName() should throw an error if a dataset property name less than 2 chars long',
    function() {
      const testDataset = class testDataset {
        _ = null;
      };
      const Model = new model(new testDataset());
      assert.throws(
        () => Model._getProperties(),
        Error,
        'Property names must contain at least two chars including the underscore."'
      );
  });
});
