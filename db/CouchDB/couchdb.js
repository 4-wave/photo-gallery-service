// DB Connection =========================================================================================

const nano = require("nano")("http://localhost:5984");

const documents = [
  { a: 1, b: 2 },
  { _id: "tiger", striped: true }
];

nano.db
  .destroy("airbnbphotos")
  .then(response => {
    return nano.db.create("airbnbphotos");
  })
  .then(response => {
    airbnbphotos = nano.use("airbnbphotos");
    return airbnbphotos.bulk({ docs: documents }).then(body => {
      console.log(body);
    });
  })
  .then(response => {
    console.log("you have inserted a document with an _id of rabbit");
    console.log(response);
  });
