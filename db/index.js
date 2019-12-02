const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/airbnb';

mongoose.connect(mongoUri, {useNewUrlParser: true});

database = mongoose.Promise = global.Promise;

const urlSchema = new mongoose.Schema({url: String}) //generic subdoc, becasue we do not know how many subdocs there will be

const listingSchema = new mongoose.Schema({
  name: String, 
  urls: [urlSchema],
  url: urlSchema
}
);

const Listing = mongoose.model('Listing', listingSchema);

module.exports.Listing = Listing;
module.exports.database = database;