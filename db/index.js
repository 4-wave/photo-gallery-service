const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/airbnb';

//NEED TO CONNECT TO A DIFFERENT URI now....it should be database, instead of local host
// and this needs to disconnect afterwards as well? so we can run different commands
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
