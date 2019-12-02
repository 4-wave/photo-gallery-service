const db = require('../db/index');

module.exports.getData = function (req, res) {
  db.Listing.find({})
    .then((data) => {
      res.send(data);
    });
};
