const express = require('express');
const path = require('path');
const model = require('./model.js');

const app = express();
const port = 3000;

app.use('/', express.static(path.join(__dirname, '../public')));
app.use('/:id', express.static(path.join(__dirname, '../public')));

app.get('/airbnb/listings/:id', (req, res) => {
  model.getData(req.params.id, res);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
