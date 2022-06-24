const assert = require('chai').assert;
const event = require('../../lib/datasets/eventDataset');
const variable = require('../../lib/variable');

describe('dataset/eventDataset.js', function() {
  it('should define an object', function() {
    let Event = new event();
    assert.equal(typeof Event, 'object');
  });

  describe ('getUrl()', function () {
    it('should return an object which is passed by the constructor', function () {
      let Event = new event(
        null,
        null,
        null,
        null,
        null,
        'https://www.google.de'
      );
      assert.equal(Event.getUrl(), 'https://www.google.de');
    });
  });

  describe ('setUrl()', function () {
    it('should return an object which is passed by the setUrl() method', function () {
      let Event = new event(null, null, null, null, null, null);
      Event.setUrl('https://www.beerfest.de');
      assert.equal(Event.getUrl(), 'https://www.beerfest.de');
    });
  });

  describe ('getId()', function () {
    it('should return an object which is passed by the constructor', function () {
      let Event = new event(1, null, null, null, null, null);
      assert.equal(Event.getId(), 1);
    });
  });

  describe ('setId()', function () {
    it('should set the id', function () {
      let Event = new event(null, null, null, null, null, null);
      Event.setId(2);
      assert.equal(Event.getId(), 2);
    });
  });

  describe ('getName()', function () {
    it('should return an object which is passed by the constructor', function () {
      let Event = new event(null, 'Beerfest', null, null);
      assert.equal(Event.getName(), 'Beerfest');
    });
  });

  describe ('getDateStart()', function () {
    it('should return an object which is passed by the constructor', function () {
      let Event = new event(null, null, '2034-02-02', null);
      assert.equal(Event.getDateStart(), '2034-02-02');
    });
  });

  describe ('getNumberOfDates()', function () {
    it('should return an object which is passed by the constructor', function () {
      let Event = new event(null, null, null, 10, null);
      assert.equal(Event.getNumberOfDays(), 10);
    });
  });

  describe ('setNumberOfDays()', function () {
    it('should set the number of days', function () {
      let Event = new event(null, null, null, null, null, null);
      Event.setNumberOfDays(2);
      assert.equal(Event.getNumberOfDays(), 2);
    });
  });

  describe ('getVenueId()', function () {
    it('should return an object which is passed by the constructor', function () {
      let Event = new event(null, null, null, null, 192, null);
      assert.equal(Event.getVenueId(), 192);
    });
  });

  describe ('setVenueId()', function () {
    it('should set the id of the venue', function () {
      let Event = new event(null, null, null, null, null, null);
      Event.setVenueId(2);
      assert.equal(Event.getVenueId(), 2);
    });
  });

  describe ('getSoldOut()', function () {
    it('should return an object which is passed by the constructor', function () {
      let Event = new event(null, null, null, null, null, null, 1);
      assert.equal(Event.getSoldOut(), 1);
    });
  });

  describe ('setSoldOut()', function () {
    it('should set the sold out status', function () {
      let Event = new event(null, null, null, null, null, null);
      Event.setSoldOut(1);
      assert.equal(Event.getSoldOut(), 1);
    });
  });

  describe('_getProperties()', function () {
    it(
      'should return an Array with the property name "id"',
      function () {
        let Event = new event();
        assert.equal(Event._getProperties()[0], 'id');
    });

    it(
      'should return an Array with the property name "url"',
      function () {
        let Event = new event();
        assert.equal(Event._getProperties() instanceof Array, true);
        assert.equal(Event._getProperties()[5], 'url');
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
      let Event = new event(
        new variable('id'),
        new variable('name'),
        new variable('date_start'),
        new variable('number_of_days'),
        new variable('venue_id'),
        new variable('url'),
        new variable('sold_out')
      );

      assert.instanceOf(Event.getProperties()[0], Array);
      assert.equal(Event.getProperties()[0][0], 'id');
      assert.equal(Event.getProperties()[0][1], 'getId');
      assert.equal(Event.getProperties()[0][2], 'setId');
      assert.equal(Event.getProperties()[2][1], 'getDateStart');
      assert.equal(Event.getProperties()[2][0], 'date_start');
    });
  });
});
