const controller = require('../lib/controller.js');
let controller_1 = new controller;

suite('controller.js', function() {
  test('getResponse() should return a json string', function() {
    JSON.parse(controller_1.getResponse());
  });
});
