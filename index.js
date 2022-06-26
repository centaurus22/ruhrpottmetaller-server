'use strict';

const express = require('express');
const app = express();

const authorisation = require('./routes/authorisation');
const event = require('./routes/event');

app.use(express.static('static'));

app.use('api/v1/user/login', authorisation);

app.use('/api/v1/event', event);

const port = 3000;
app.listen(port, () => console.log('Server running on port ' + port));
