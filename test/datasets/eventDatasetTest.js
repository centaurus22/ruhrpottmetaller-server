const assert = require('assert');
const event = require('../../lib/datasets/eventDataset.js');
const abstractDataset = require('../../lib/datasets/abstractDataset');

suite('dataset/event.js', function() {
      assert.equal(Dataset.getProperties() instanceof Array, true);
      assert.equal(Dataset.getProperties().length, 0);
  });

  test(
    'getProperties() of a Dataset with one property should return an Array with the property name without _',
    function() {
      const dataset = class dataset extends abstractDataset{
        _url = null;
      };
      const Dataset = new dataset();
      assert.equal(Dataset.getProperties() instanceof Array, true);
      assert.equal(Dataset.getProperties().length, 1);
      assert.equal(Dataset.getProperties()[0], 'url');
  });

  test(
    'getProperties() of a Dataset with properties should return Array with property names without _',
    function() {
      const dataset = class dataset extends abstractDataset{
        _url = null;
        _name = null;
      };
      const Dataset = new dataset();
      assert.equal(Dataset.getProperties() instanceof Array, true);
      assert.equal(Dataset.getProperties().length, 2);
      assert.equal(Dataset.getProperties()[0], 'url');
      assert.equal(Dataset.getProperties()[1], 'name');
  });

  test('getDatasetName() should return the name of the dataset', function() {
    const Event = new event(new Array);
    assert.equal(Event.getDatasetName(), 'event');
  });

  test(
    'getDatasetName() should return the name of the testDataset',
    function() {
      const testDataset = class testDataset extends abstractDataset{};
      const TestDataset = new testDataset();
      assert.equal(TestDataset.getDatasetName(), 'test');
  });

  test(
    'getDatasetName() should throw an error if the object name does not end with "Dataset"',
    function() {
      const testData = class testData extends abstractDataset{};
      const TestData = new testData();
      assert.throws(
        () => TestData.getDatasetName(),
        Error,
        'The Dataset name must end with "Dataset".'
      );
  });

  test(
    'getDatasetName() should throw an error if a dataset property name less than 2 chars long',
    function() {
      const testDataset = class testDataset extends abstractDataset{
        _ = null;
      };
      const TestDataset = new testDataset();
      assert.throws(
        () => TestDataset.getProperties(),
        Error,
        'Property names must contain at least two chars including the underscore."'
      );
  });
});
