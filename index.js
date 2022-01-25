'use strict';

const express = require('express');
const webserver = express();

const controller = require('./lib/controller');
const mainController = new controller;

webserver.get('*', (request, response) => {
        response.json(mainController.getJsonResponse());
});

webserver.all('*', (request, response) => {
        response.status(501).send({msg: 'Not Implemented'});
});

const port = 3000;
webserver.listen(port, () => console.log('Server running on port ' + port));