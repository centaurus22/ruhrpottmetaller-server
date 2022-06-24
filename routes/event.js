const express = require('express');
const router = express.Router();

const controller = require('../lib/controller');
const databaseConnection = require('../lib/databaseConnection');
databaseConnection.connect();
const model = require('../lib/model')
const eventDataset = require('../lib/datasets/eventDataset')
const variable = require('../lib/variable')
const Controller = new controller(new model(databaseConnection, new eventDataset(
  new variable('id'),
  new variable('name'),
  new variable('date_start'),
  new variable('number_of_days'),
  new variable('venue_id'),
  new variable('url'),
  new variable('sold_out')
)));

router.get('/', async (request, response) => {
  response.status(200).json(await Controller.getResponse());
});

module.exports = router;
