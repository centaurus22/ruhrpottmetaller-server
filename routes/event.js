const router = require('express').Router();

const databaseConnection = require('../lib/databaseConnection');
databaseConnection.connect();
const model = require('../lib/model');
const eventDataset = require('../lib/datasets/eventDataset')
const variable = require('../lib/variable')
const Model = new model(databaseConnection, new eventDataset(
  new variable('id'),
  new variable('name'),
  new variable('date_start'),
  new variable('number_of_days'),
  new variable('venue_id'),
  new variable('url'),
  new variable('sold_out')
));

router.get('/', async (request, response, next) => {
  response.status(200).json(await Model.getDatasets(next));
});

router.use((error, request, response, next) => {
  console.log(error);
  response.status(500).send('Internal Server Error');
});


module.exports = router;
