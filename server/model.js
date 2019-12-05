const db = require('../db/index');

module.exports.getData = function getAllDataFromDb(id, res) {
  db.Listing.find({})
    .then((data) => {
      res.send(data[id-1]);
    });
};
