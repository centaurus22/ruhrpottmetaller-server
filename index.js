'use strict';

const express = require('express');
const app = express();
const database = require('./lib/database.js');

app.get('*', (request, response) => {
        response.send('Response to a get request');
});

app.all('*', (request, response) => {
        response.status(501).send({msg: 'Not Implemented'});
});

const port = 3000;
app.listen(port, () => console.log('Server running on port ' + port));