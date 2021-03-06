const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/airbnb';

const connectWithRetry = () => {
  console.log('MongoDB connection with retry');
  mongoose.connect(mongoUri, { useNewUrlParser: true }).then(() => {
    console.log('MongoDB is connected');
  }).catch((err) => {
    console.log('unsuccessful, retry after 5 seconds.', err);
    setTimeout(connectWithRetry, 5000);
  });
};

connectWithRetry();

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


