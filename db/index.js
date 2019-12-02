const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/airbnb';

const database = mongoose.connect(mongoUri, { useNewUrlParser: true });

mongoose.Promise = global.Promise;

// generic subdoc, becasue we do not know how many subdocs there will be
const urlSchema = new mongoose.Schema({ url: String });

const listingSchema = new mongoose.Schema({
  name: String,
  urls: [urlSchema],
  url: urlSchema,
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports.Listing = Listing;
module.exports.database = database;
