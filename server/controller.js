const { PhotoCollection } = require("../db/PostGres/model.js");

// module.exports.getData = function getAllDataFromDb(id, res) {
//   db.Listing.find({})
//     .then((data) => {
//       console.log('THIS IS THE DATA INSIDE OF THE DB IN THE CONTAINER', data);
//       res.send(data[id - 1]);
//     });
// };

module.exports = {
  PhotoCollection: {
    getData: (id, req, res) => {
      PhotoCollection.get(id, (err, data) => {
        if (err) {
          console.log(err);
        } else {
          res.send(data.rows);
          // console.log(data.rows[0]);
        }
      });
    }
  }
};
