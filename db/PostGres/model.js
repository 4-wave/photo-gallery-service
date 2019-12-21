const { Pool, Client } = require("pg");
const pool = new Pool({
  user: "lillytang",
  host: "localhost",
  database: "photos",
  port: 5432
});

module.exports = {
  PhotoCollection: {
    get: (restaurantID, callback) => {
      connection.query(
        `SELECT * FROM popularDishes WHERE restaurant_id = ${restaurantID}`,
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
        var query = `COPY photos ( photo_caption,photo_url,photo_upload_date, listing_id)  FROM '/Users/lillytang/Documents/airbnb-photogallery/db/PostGres/photoTable.csv' DELIMITER ',';`;
        promises.push(pool.query(query));
      }

      Promise.all(promises)
        .then(() =>
          console.log(
            `The query took ${new Date() -
              startTime}ms to write ${millionRows} million rows to 'Photos' table`
          )
        )
        .catch(err => console.error("Error executing promise.all", err.stack));
    }
  },
  HostCollection: {
    get: (restaurantID, callback) => {
      connection.query(
        `SELECT * FROM popularDishes WHERE restaurant_id = ${restaurantID}`,
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
        var query = `COPY host (host_name)  FROM '/Users/lillytang/Documents/airbnb-photogallery/db/PostGres/hostTable.csv' DELIMITER ',';`;
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
    get: (restaurantID, callback) => {
      connection.query(
        `SELECT * FROM popularDishes WHERE restaurant_id = ${restaurantID}`,
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
        var query = `COPY listing (region)  FROM '/Users/lillytang/Documents/airbnb-photogallery/db/PostGres/listingTable.csv' DELIMITER ',';`;
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
