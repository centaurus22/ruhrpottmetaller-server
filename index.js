'use strict';

const express = require('express');
const app = express();

const event = require('./routes/event');

app.use(express.static('static'));

app.use('/api/v1/event', event);

app.use((error, request, response, next) => {
  response.status(500).send('Internal Server Error');
});

const port = 3000;
app.listen(port, () => console.log('Server running on port ' + port));
