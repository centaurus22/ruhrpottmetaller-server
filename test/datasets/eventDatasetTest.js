const assert = require('chai').assert;
const event = require('../../lib/datasets/eventDataset.js');

describe('dataset/eventDataset.js', function() {
  it('should define an object', function() {
    let Event = new event();
    assert.equal(typeof Event, 'object');
  });

  describe ('getUrl()', function () {
    it('should return an object which is passed by the constructor', function () {
      let Event = new event(null, null, 'https://www.google.de');
      assert.equal(Event.getUrl(), 'https://www.google.de');
    });
  });

  describe ('setUrl()', function () {
    it('should return an object which is passed by the setUrl() method', function () {
      let Event = new event(null, null, null);
      Event.setUrl('https://www.beerfest.de');
      assert.equal(Event.getUrl(), 'https://www.beerfest.de');
    });
  });

  describe ('getId()', function () {
    it('should return an object which is passed by the constructor', function () {
      let Event = new event(1, null, null);
      assert.equal(Event.getId(), 1);
    });
  });

  describe ('setId()', function () {
    it('should return an object which is passed by the setId() method', function () {
      let Event = new event(null, null, null);
      Event.setId(2);
      assert.equal(Event.getId(), 2);
    });
  });

  describe ('getName()', function () {
    it('should return an object which is passed by the constructor', function () {
      let Event = new event(null, 'Beerfest', null);
      assert.equal(Event.getName(), 'Beerfest');
    });
  });

  describe('_getProperties()', function () {
    it(
      'should return an Array with the property name "_id"',
      function () {
        let Event = new event();
        assert.equal(Event._getProperties()[0], '_id');
    });

    it(
      'should return an Array with the property name "_url"',
      function () {
        let Event = new event();
        assert.equal(Event._getProperties() instanceof Array, true);
        assert.equal(Event._getProperties()[2], '_url');
    });
  });

  describe('getDatasetName()', function () {
    it('should return the name of the dataset', function () {
      let Event = new event();
      assert.equal(Event.getDatasetName(), 'event');
    });
  });

  describe('getDatasetProperties()', function () {
    it('should return an Array containing setters and getters', function () {
      let Event = new event();
      assert.instanceOf(Event.getProperties(), Array);
      assert.instanceOf(Event.getProperties()[0], Array);
      assert.equal(Event.getProperties()[0][0], 'id');
      assert.equal(Event.getProperties()[0][1], 'getId');
      assert.equal(Event.getProperties()[0][2], 'setId');
    });
  });
});
