const controller = require('../lib/controller.js');
let testDatabaseConnection = require('./testLib/testDatabaseConnection');
const model = require('../lib/model.js');
const variable = require('../lib/variable.js');
const event = require('./testLib/eventDataset.js');

describe('controller.js', function() {
  before(async function () {
   await testDatabaseConnection.connect();
  });

  afterEach(async function () {
    const sql = 'TRUNCATE TABLE event';
    await testDatabaseConnection.query(sql, function (error) {
      if (error) {
        throw error;
      }
    });
  });

  describe('getResponse()', function () {
    it('should return a json string', async function() {
        const Controller = new controller(new model(
        testDatabaseConnection,
        new event(new variable('id'))
      ));
      const sql1 = 'INSERT INTO event SET date_start = "2032-07-22", url = "https://www.beerfest.de"';
      await testDatabaseConnection.query(sql1, function (error) {
        if (error) {
          throw error;
        }
      });
      console.log(await Controller.getResponse());
      JSON.parse(await Controller.getResponse());
    });
  });
});
