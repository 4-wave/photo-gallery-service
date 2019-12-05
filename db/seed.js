const db = require('../db/index.js');

const photoOptions = {
  1: { type: 'bedroom', quantity: 20 },
  2: { type: 'livingroom', quantity: 20 },
  3: { type: 'bathroom', quantity: 10 },
  4: { type: 'kitchen', quantity: 10 },
  5: { type: 'outside', quantity: 10 },
  6: { type: 'feature', quantity: 10 },
  7: { type: 'bedroom', quantity: 20 }, // repeated photos here on allowing for 5-10 photos per house
  8: { type: 'livingroom', quantity: 20 },
  9: { type: 'outside', quantity: 10 },
  10: { type: 'feature', quantity: 10 },

};

const nameKeyWords = {
  location: ['North', 'Eastern', 'LA', 'Southern', 'Western', 'Echo Park', 'Ocean View', 'World Famous', 'Manhattn', 'Brownstone', 'Bay Area'],
  description: ['Desert', 'Tree', 'Spacious', 'Stunning', 'Architectural', 'Enchanting', 'Quirky'],
  type: ['Villa', 'House', 'Quarters', 'Lodging', 'Nest', 'Hideaway', 'Retreat', 'Cottage', 'Loft', 'Luxury'],
};

function randomNumberGenerator(number) {
  return Math.floor((Math.random() * number) + 1);
}

function seedData(NumberOfSeeds) {
// seeds Number-Of-Seeds listings
  for (let i = 1; i < NumberOfSeeds + 1; i += 1) {
    // pick a random name. random location + random description + random house type
    const locationId = Math.floor(Math.random() * nameKeyWords.location.length);
    const location = nameKeyWords.location[locationId];

    const descriptionId = Math.floor(Math.random() * nameKeyWords.description.length);
    const description = nameKeyWords.description[descriptionId];

    const type = nameKeyWords.type[Math.floor((Math.random() * nameKeyWords.type.length))];

    const houseName = `${location} ${description} ${type}`;

    // choose a random number of photos this listing will have ranging from 5 - 10
    const numberOfPhotos = Math.floor((Math.random() * 10) + 1);
    const urlArr = [];

    for (let j = 1; j < numberOfPhotos + 1; j += 1) {
      const number = randomNumberGenerator(photoOptions[j].quantity);
      const currentUrl = `https://airbnbphotogallery.s3-us-west-1.amazonaws.com/${photoOptions[j].type}${number}.jpg`;
      const obj = { url: currentUrl };
      urlArr.push(obj);
    }

    // create document and save to data base
    const document = new db.Listing({
      name: houseName,
      urls: urlArr,
    });

    document.save(() => {});
  }
}

// Clean collection Before Seeding
db.Listing.remove({}, () => {
  console.log('collection was cleared!');
});

seedData(100);
