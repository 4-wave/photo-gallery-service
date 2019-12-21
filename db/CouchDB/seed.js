// seeding databank =============================================================================================

const photoOptions = [
  { type: "bedroom", quantity: 20 },
  { type: "livingroom", quantity: 20 },
  { type: "bathroom", quantity: 10 },
  { type: "kitchen", quantity: 10 },
  { type: "outside", quantity: 10 },
  { type: "feature", quantity: 10 },
  { type: "bedroom", quantity: 20 },
  { type: "livingroom", quantity: 20 },
  { type: "outside", quantity: 10 },
  { type: "feature", quantity: 10 }
];

const nameKeyWords = {
  location: [
    "North",
    "Eastern",
    "LA",
    "Southern",
    "Western",
    "Echo Park",
    "Ocean View",
    "World Famous",
    "Manhattn",
    "Brownstone",
    "Bay Area"
  ],
  description: [
    "Desert",
    "Tree",
    "Spacious",
    "Stunning",
    "Architectural",
    "Enchanting",
    "Quirky"
  ],
  type: [
    "Villa",
    "House",
    "Quarters",
    "Lodging",
    "Nest",
    "Hideaway",
    "Retreat",
    "Cottage",
    "Loft",
    "Luxury"
  ],
  caption: [
    "One word: amazing.",
    "Ive stayed in many air bnb homes & this is one of my favorites!",
    "Its quiet cozy aesthetically pleasing and the beds are super comfy too! :)",
    "The Villa is amazing! Just like in the photos",
    "The garden is magical and one of a kind",
    "ocean view from the suite",
    "750 Sq. Ft. Luxury Penthouse Suite"
  ]
};

// seeding logic ===============================================================================================

function randomNumberGenerator(number) {
  return Math.floor(Math.random() * number + 1);
}

function seedData(NumberOfSeeds) {
  // seeds Number-Of-Seeds listings
  for (let i = 1; i < NumberOfSeeds + 1; i += 1) {
    // generate random photo captions
    const captionId = Math.floor(Math.random() * nameKeyWords.caption.length);
    const caption = nameKeyWords.caption[captionId];

    // generate a random name. random location + random description + random house type
    const locationId = Math.floor(Math.random() * nameKeyWords.location.length);
    const location = nameKeyWords.location[locationId];
    const descriptionId = Math.floor(
      Math.random() * nameKeyWords.description.length
    );
    const description = nameKeyWords.description[descriptionId];
    const type =
      nameKeyWords.type[Math.floor(Math.random() * nameKeyWords.type.length)];
    const houseName = `${location} ${description} ${type}`;

    // generate random images
    const photoOptionIdx = Math.floor(Math.random() * 9);
    const number = photoOptions[photoOptionIdx].quantity;
    const currentUrl = `https://airbnbphotogallery.s3-us-west-1.amazonaws.com/${photoOptions[photoOptionIdx].type}${number}.jpg`;
    const timestamp = new Date();

    photoJSONObj.push({ caption, currentUrl, timestamp });
  }
}

const photoJSONObj = [];

const seedCount = 100000;
// generate X rows of data
seedData(seedCount);

// seeding ==================================================================================================

const nano = require("nano")("http://localhost:5984");

const startTime = Date.now();
nano.db
  .destroy("airbnbphotos")
  .then(response => {
    return nano.db.create("airbnbphotos");
  })
  .then(response => {
    airbnbphotos = nano.use("airbnbphotos");
    return airbnbphotos.bulk({ docs: photoJSONObj }).then(response => {
      airbnbphotos.bulk({ docs: photoJSONObj });
    });
  })
  .then(response => {
    console.log(
      `Inserted ${seedCount * 2} documents at ${new Date() - startTime}ms`
    );
  });
