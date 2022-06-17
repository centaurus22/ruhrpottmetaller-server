const assert = require('assert');
const event = require('../../lib/datasets/eventDataset.js');

describe('dataset/eventDataset.js', function() {
  it('should define an object', function() {
    let Event = new event();
    assert.equal(typeof Event, 'object');
  });

  describe ('getUrl()', function () {
    it('should return an object which is passed by the constructor', function () {
      let Event = new event('https://www.google.de');
      assert.equal(Event.getUrl(), 'https://www.google.de');
    });
  });

  describe('getProperties()', function () {
    it(
      'should return an Array with the property name "_url"',
      function () {
        let Event = new event();
        assert.equal(Event.getProperties() instanceof Array, true);
        assert.equal(Event.getProperties()[0], '_url');
    });
  });

  describe('getDatasetName()', function () {
    it('should return the name of the dataset', function () {
      let Event = new event();
      assert.equal(Event.getDatasetName(), 'event');
    });
  });
});
