'use strict';

const express = require('express');
const webserver = express();
//const database = require('./lib/database.js');

webserver.get('*', (request, response) => {
        response.send('Response to a get request');
});

webserver.all('*', (request, response) => {
        response.status(501).send({msg: 'Not Implemented'});
});

const port = 3000;
webserver.listen(port, () => console.log('Server running on port ' + port));