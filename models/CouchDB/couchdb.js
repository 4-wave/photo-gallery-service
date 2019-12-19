// DB Connection =========================================

// nano is a wrapper to interact with CouchDB
var nano = require("nano");

module.exports = nano(process.env.COUCHDB_URL || "http://localhost:5984");
