const express = require("express"),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser"),
  app = express(),
  items = require("./routes/api/items"),
  seedDB = require("./seeds");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// seedDB();
     
//environment variables
require("dotenv").config();

mongoose
  .connect(process.env.DATABASEURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongodb Connected..."))
  .catch((err) => console.log(err));

app.use("/", items);

//mongoose.set("useFindAndModify", false);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Listening to port ${port}`));
