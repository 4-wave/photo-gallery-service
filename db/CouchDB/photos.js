// Creating documents in CouchDB  ====================================================================
var airbnbPhotos = require("./couchdb").use("airbnbphotos");

// receives a photo record as the first arg and inserts a document into CouchDB 'airbnbPhotos' database

// create a photo
exports.create = function createPhoto(photo, cb) {
  airbnbPhotos.insert(photo, photo.email, cb);
};
