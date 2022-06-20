const assert = require('assert');
const event = require('../../lib/datasets/eventDataset.js');

describe('dataset/eventDataset.js', function() {
  it('should define an object', function() {
    let Event = new event();
    assert.equal(typeof Event, 'object');
  });

  describe ('getUrl()', function () {
    it('should return an object which is passed by the constructor', function () {
      let Event = new event(null, 'https://www.google.de');
      assert.equal(Event.getUrl(), 'https://www.google.de');
    });
  });

  describe ('setUrl()', function () {
    it('should return an object which is passed by the setUrl() method', function () {
      let Event = new event(null, null);
      Event.setUrl('https://www.beerfest.de');
      assert.equal(Event.getUrl(), 'https://www.beerfest.de');
    });
  });

  describe ('getId()', function () {
    it('should return an object which is passed by the constructor', function () {
      let Event = new event(1, null);
      assert.equal(Event.getId(), 1);
    });
  });

  describe ('setId()', function () {
    it('should return an object which is passed by the setId() method', function () {
      let Event = new event(null, null);
      Event.setId(2);
      assert.equal(Event.getId(), 2);
    });
  });
  describe('getProperties()', function () {
    it(
      'should return an Array with the property name "_id"',
      function () {
        let Event = new event();
        assert.equal(Event.getProperties()[0], '_id');
    });

    it(
      'should return an Array with the property name "_url"',
      function () {
        let Event = new event();
        assert.equal(Event.getProperties() instanceof Array, true);
        assert.equal(Event.getProperties()[1], '_url');
    });
  });

  describe('getDatasetName()', function () {
    it('should return the name of the dataset', function () {
      let Event = new event();
      assert.equal(Event.getDatasetName(), 'event');
    });
  });
});
