const assert = require('assert');
const event = require('../../lib/datasets/eventDataset.js');

describe('dataset/event.js', function() {
  it('should return an object', function() {
    let event_1 = new event();
    assert.equal(typeof event_1, 'object');
  });

  it(
    'should return an object which is passed by the constructor',
    function () {
      let event_2 = new event(new Date());
      assert.equal(event_2.getUrl() instanceof Date, true);
  });

});
