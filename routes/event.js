const express = require('express');
const router = express.Router();

const controller = require('../lib/controller');
const mainController = new controller;

router.get('/', (request, response) => {
  response.status(200).json(mainController.getResponse());
});

module.exports = router;
