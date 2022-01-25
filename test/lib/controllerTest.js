const controller = require('../../lib/controller.js');
controller_1 = new controller;

suite('controller.js', function() {
    test('getJsonResponse() should return a json string', function() {
        JSON.parse(controller_1.getJsonResponse());
    });
});