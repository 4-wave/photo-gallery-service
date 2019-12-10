const express = require('express');
const app = express();
const path = require('path');
const model = require('./model.js');
const cors = require('cors');

app.use(cors());

const port = 3004;

app.use('/', express.static(path.join(__dirname, '../public')));
app.use('/:id', express.static(path.join(__dirname, '../public')));

app.get('/airbnb/listings/:id', (req, res) => {
  model.getData(req.params.id, res);
});

app.listen(port, () => {});
