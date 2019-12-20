var photos = require("./photos");

var photo = {
  photo_url:
    "https://3rxg9qea18zhtl6s2u8jammft-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/Lyric-New-Orleans-3-Bed-3-Bath-Apartment.jpg",
  photo_caption: "Squeaky clean room",
  upload_date: new Date(),
  photo_type: "jpeg",
  listing_name: "The Treehouse",
  host_name: "Amy Looke",
  region: "California",
  room_type: "apartment"
};

photos.create(photo, function(err) {
  if (err) {
    throw err;
  } else {
    console.log("photo inserted");
  }
});
