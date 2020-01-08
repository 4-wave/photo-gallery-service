const { Pool, Client } = require("pg");

// connected to remote postgres on aws
const pool = new Pool({
  user: "postgres",
  host: "ec2-13-52-67-66.us-west-1.compute.amazonaws.com",
  database: "photos",
  port: 5432
});

// localhost connection
// const pool = new Pool({
//   user: "lillytang",
//   host: "localhost",
//   database: "photos",
//   port: 5432
// });

module.exports = {
  PhotoCollection: {
    get: (listingID, callback) => {
      pool.query(
        `SELECT * FROM photos WHERE listing_id = ${listingID}`,
        function(error, result) {
          if (error) {
            callback(error);
          }
          callback(null, result);
        }
      );
    },
    seed: async callback => {
      const millionRows = 1;
      const startTime = new Date();
      const promises = [];

      for (var i = 0; i < millionRows; i++) {
        var query = `COPY photos ( photo_caption,photo_url,photo_upload_date, listing_id)  FROM '/Users/lillytang/Desktop/photo-gallery-service/db/PostGres/photoTable.csv' DELIMITER ',';`;
        promises.push(pool.query(query));
      }

      Promise.all(promises)
        .then(() =>
          console.log(
            `The query took ${new Date() -
              startTime}ms to write 5 million rows to 'Photos' table`
          )
        )
        .catch(err => console.error("Error executing promise.all", err.stack));
    }
  },
  HostCollection: {
    get: (listingID, callback) => {
      pool.query(
        `SELECT * FROM photos WHERE listing_id = ${listingID}`,
        function(error, result) {
          if (error) {
            callback(error);
          }
          callback(null, result);
        }
      );
    },
    seed: async callback => {
      const millionRows = 1;
      const startTime = new Date();
      const promises = [];

      for (var i = 0; i < millionRows; i++) {
        var query = `COPY host (host_name)  FROM '/Users/lillytang/Desktop/photo-gallery-service/db/PostGres/hostTable.csv' DELIMITER ',';`;
        promises.push(pool.query(query));
      }

      Promise.all(promises)
        .then(() =>
          console.log(
            `The query took ${new Date() -
              startTime}ms to write ${millionRows} million rows to 'Host' table`
          )
        )
        .catch(err => console.error("Error executing promise.all", err.stack));
    }
  },
  ListingCollection: {
    get: (listingID, callback) => {
      connection.query(
        `SELECT * FROM photos WHERE listing_id = ${listingID}`,
        function(error, result) {
          if (error) {
            callback(error);
          }
          callback(null, result);
        }
      );
    },
    seed: async callback => {
      const millionRows = 1;
      const startTime = new Date();
      const promises = [];

      for (var i = 0; i < millionRows; i++) {
        var query = `COPY listing (region)  FROM '/Users/lillytang/Desktop/photo-gallery-service/db/PostGres/listingTable.csv' DELIMITER ',';`;
        promises.push(pool.query(query));
      }

      Promise.all(promises)
        .then(() =>
          console.log(
            `The query took ${new Date() -
              startTime}ms to write ${millionRows} million rows to 'Listing' table`
          )
        )
        .catch(err => console.error("Error executing promise.all", err.stack));
    }
  }
};
