const assert = require('chai').assert;
const user = require('../../lib/datasets/userDataset');

describe('dataset/userDataset.js', function() {
  it('should define an object', function() {
    let User = new user();
    assert.equal(typeof User, 'object');
  });

  describe ('getUrl()', function () {
    it('should return an object which is passed by the constructor', function () {
      let User = new user(
        null,
        null,
        '$2y$10$3jiKr4f5/jjFYjuXPf1FFuzT9NrI2USgb2Gxt/qiWCgS51FipuYhi'
      );
      assert.equal(
        User.getHash(),
        '$2y$10$3jiKr4f5/jjFYjuXPf1FFuzT9NrI2USgb2Gxt/qiWCgS51FipuYhi'
      );
    });
  });

  describe ('setHash()', function () {
    it('should return an object which is passed by the setHash() method', function () {
      let User = new user(null, null, null);
      User.setHash('$2y$10$JQQ3lUj/8cUqjvoyfD/7G.1UfNuoRO7KwLskOd0c68u1TGmSx3REu');
      assert.equal(
        User.getHash(),
        '$2y$10$JQQ3lUj/8cUqjvoyfD/7G.1UfNuoRO7KwLskOd0c68u1TGmSx3REu'
      );
    });
  });

  describe ('getId()', function () {
    it('should return an object which is passed by the constructor', function () {
      let User = new user(1, null, null);
      assert.equal(User.getId(), 1);
    });
  });

  describe ('setId()', function () {
    it('should set the id', function () {
      let User = new user(null, null, null);
      User.setId(2);
      assert.equal(User.getId(), 2);
    });
  });

  describe ('getEmail()', function () {
    it('should return an object which is passed by the constructor', function () {
      let User = new user(null, 'testEmail@ruhrpottmetaller.de', null);
      assert.equal(User.getEmail(), 'testEmail@ruhrpottmetaller.de');
    });
  });

  describe ('setEmail()', function () {
    it('should set the E-Mail address', function () {
      let User = new user(null, null, null);
      User.setEmail('testZwo@ruhrpottmetaller.de');
      assert.equal(User.getEmail(), 'testZwo@ruhrpottmetaller.de');
    });
  });
});
