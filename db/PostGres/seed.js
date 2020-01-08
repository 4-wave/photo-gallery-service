// seeding file  ===============================================================================================

const Model = require("./model");
const fs = require("fs");
const path = require("path");
const os = require("os");

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
    "Bay Area",
    "Atlanta",
    "Dallas"
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
  ],
  hostName: [
    "Mary Lou",
    "Tony Stark",
    "Charlie Brown",
    "Lorraine Chan",
    "Lilly Tang",
    "Momo Tang"
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

    // generate random host name
    const hostNameId = Math.floor(Math.random() * nameKeyWords.hostName.length);
    const hostName = nameKeyWords.hostName[hostNameId];

    // generate random number of images per listing

    const randomNumber = Math.floor(Math.random() * 15);
    for (let j = 0; j < randomNumber; j++) {
      const timestamp = new Date();
      const listingId = i;
      const photoOptionIdx = Math.floor(Math.random() * 10);
      const number = Math.floor(
        Math.random() * photoOptions[photoOptionIdx].quantity
      );
      let currentUrl = `https://airbnbphotogallery.s3-us-west-1.amazonaws.com/${photoOptions[photoOptionIdx].type}${number}.jpg`;
      photoJSONObj.push({ caption, currentUrl, timestamp, listingId });
    }

    hostJSONObj.push({ hostName });
    listingJSONObj.push({ location });
  }
}
// data get turned into JSON obj before writing to CSV
const photoJSONObj = [];
const hostJSONObj = [];
const listingJSONObj = [];

// generate X rows of listing
seedData(2000000);

// // write data to CSV ============================================================================================================

// write file in the same folder
const photoFilePath = path.join(__dirname, "photoTable.csv"); //csv for the Photos table
const hostFilePath = path.join(__dirname, "hostTable.csv"); // csv for the Host table
const listingFilePath = path.join(__dirname, "listingTable.csv"); // csv for the Listing table
const photoOutput = []; // holds all rows of photo data
const hostOutput = []; // holds all rows of host data
const listingOutput = []; // holds all rows of listing data

photoJSONObj.forEach(d => {
  const row = []; // a new array for each row of data
  row.push(`'${d.caption}'`);
  row.push(`'${d.currentUrl}'`);
  row.push(`'${d.timestamp}'`);
  row.push(d.listingId);

  photoOutput.push(row.join()); // by default, join() uses a ','
});

hostJSONObj.forEach(d => {
  const row = []; // a new array for each row of data
  row.push(`'${d.hostName}'`);

  hostOutput.push(row.join()); // by default, join() uses a ','
});

listingJSONObj.forEach(d => {
  const row = []; // a new array for each row of data
  row.push(`'${d.location}'`);

  listingOutput.push(row.join()); // by default, join() uses a ','
});

const startTime = new Date();
fs.writeFileSync(hostFilePath, hostOutput.join(os.EOL)); // write to HostTable.csv
fs.writeFileSync(photoFilePath, photoOutput.join(os.EOL)); // write to PhotoTable.csv
fs.writeFileSync(listingFilePath, listingOutput.join(os.EOL)); // write to PhotoTable.csv

console.log(`${new Date() - startTime}ms to write 10M+ rows to CSV`);

// // seeding ==================================================================================================

Model.HostCollection.seed((err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
    console.log("Just seeded a LOT of rows of host data!");
  }
});

Model.ListingCollection.seed((err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
    console.log("Just seeded a LOT of rows of listing data!");
  }
});

Model.PhotoCollection.seed((err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
    console.log("Just seeded another 1 million row of photo data!");
  }
});
