// Creating documents in CouchDB with a specific ID =================
var airbnbPhotos = require("./couchdb").use("airbnbphotos");

// receives a photo record as the first arg and inserts a document into CouchDB
// 'airbnbPhotos' database

exports.create = function createPhoto(photo, cb) {
  airbnbPhotos.insert(photo, photo.email, cb);
};
