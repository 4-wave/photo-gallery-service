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
    
    // partitioning the seeding into 3 parts
    const partitionOneCount = NumberOfSeeds/3 * 1
    const partitionTwoCount = NumberOfSeeds/3 * 2
    const partitionThreeCount = NumberOfSeeds/3 * 3


    const randomNumber = Math.floor(Math.random() * 15);
    for (let j = 0; j < randomNumber; j++) {
      const timestamp = new Date();
      const listingId = i;
      const photoOptionIdx = Math.floor(Math.random() * 10);
      const number = photoOptions[photoOptionIdx].quantity;
      let currentUrl = `https://airbnbphotogallery.s3-us-west-1.amazonaws.com/${photoOptions[photoOptionIdx].type}${number}.jpg`;
      if (i < partitionOneCount){
        photoJSONObjOne.push({ caption, currentUrl, timestamp, listingId });
      }
      if (partitionOneCount < i && i < partitionTwoCount) {
        photoJSONObjTwo.push({ caption, currentUrl, timestamp, listingId });
      }
      if (partitionTwoCount < i && i < partitionThreeCount) {
        photoJSONObjTwo.push({ caption, currentUrl, timestamp, listingId });
      }
    }
  }
}

const photoJSONObjOne = [];
const photoJSONObjTwo = [];
const photoJSONObjThree = [];


const seedCount = 200000;
// generate X rows of data
seedData(seedCount);

// seeding ==================================================================================================

const nano = require("nano")("http://localhost:5984");

const startTime = Date.now();
// nano.db
//   .destroy("airbnbphotos")
//   .then(response => {
//     return nano.db.create("airbnbphotos");
//   })
//   .then(response => {
//     airbnbphotos = nano.use("airbnbphotos");
//     return airbnbphotos.bulk({ docs: photoJSONObjOne })
// }).then(response => {
//   airbnbphotos.bulk({ docs: photoJSONObjTwo })
// }).then(response => {
//     console.log(
//       `Inserted ${seedCount} documents at ${new Date() - startTime}ms`
//     );
//   }).catch((error)  => {
//     console.error(error);
//   });
const airbnbphotos = nano.use("airbnbphotos");
airbnbphotos.bulk({ docs: photoJSONObjOne}).then(response => {
      console.log(
        `Inserted ${seedCount} documents at ${new Date() - startTime}ms`
      );
    }).catch((error)  => {
      console.error(error);
    });

// nano.db.use("airbnbphotos").then(response => {
//   airbnbphotos.bulk({ docs: photoJSONObjOne})
// }).then(response => {
//   airbnbphotos.bulk({ docs: photoJSONObjTwo })
// }).then(response => {
//     console.log(
//       `Inserted ${seedCount} documents at ${new Date() - startTime}ms`
//     );
//   }).catch((error)  => {
//     console.error(error);
//   });