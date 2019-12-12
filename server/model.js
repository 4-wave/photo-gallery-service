const db = require('../db/index');

module.exports.getData = function getAllDataFromDb(id, res) {
  db.Listing.find({})
    .then((data) => {
      console.log('THIS IS THE DATA INSIDE OF THE DB IN THE CONTAINER', data);
      res.send(data[id - 1]);
    });
};
