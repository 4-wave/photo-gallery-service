const relic = require("newrelic");
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const { PhotoCollection } = require("./controller.js");

app.use(cors());

const port = 3008;

app.use("/", express.static(path.join(__dirname, "../public")));
app.use("/:id", express.static(path.join(__dirname, "../public")));
app.use(
  "/bundle.js",
  express.static(path.join(__dirname, "../public/bundle.js"))
);

app.get("/airbnb/listings/:id", (req, res) => {
  PhotoCollection.getData(req.params.id, req, res);
});

// POST method route for adding photo url to db
app.post("/airbnb/listings/:id", (req, res) => {
  model.postData(req.params.id, res);
  res.send("The POST method route is working!");
});

// PUT method route for updating photo to db
app.put("/airbnb/listings/photos/:id", (req, res) => {
  // model.updateData(req.params.id, res)
  res.send("The PUT method route is working!");
});

// DELETE method route for deleting photo to db
app.delete("/airbnb/listings/photos/:id", (req, res) => {
  // model.deleteData(req.params.id, res)
  res.send("The DELETE method route is working!");
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`listening at port !!! ${port}`);
});
