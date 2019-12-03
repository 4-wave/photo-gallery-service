const express = require('express');
const path = require('path');
const model = require('./model.js');

const app = express();
const port = 3000;

app.use('/', express.static(path.join(__dirname, '../public')));

app.get('/airbnb/listings', (req, res) => {
  model.getData(req, res);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
