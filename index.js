const express = require('express');
const bodyParser = require('body-parser');
const api = require('./routes');

// initialize the app
const app = express();
const PORT = process.env.PORT || 3000;

// MIDDLEWARE
// for data posted
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// having routes separated so we can focus on what's importannt
app.use('/api/store', api.store);

app.listen(PORT, () => console.log(`listening on port ${PORT}`))