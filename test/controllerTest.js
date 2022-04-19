const controller = require('../lib/controller.js');
let controller_1 = new controller;

describe('controller.js', function() {
  it('should return a json string', function() {
    JSON.parse(controller_1.getResponse());
  });
});
