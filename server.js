const express = require("express"),
  mongoose = require("mongoose"),
  app = express(),  
  items = require("./routes/api/items"),
  users = require("./routes/api/users"),
  auth = require("./routes/api/auth"),
  seedDB = require("./seeds"),
  cors = require("cors"),
  path = require("path");
app.use(express.json());
app.use(cors())  
// seedDB();   

//environment variables
require("dotenv").config();

//local environement mongo
// mongoose 
//   .connect("mongodb://localhost/eapparelstore", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Mongodb Connected..."))
//   .catch((err) => console.log(err));
  
//MongoDB online
mongoose
  .connect(process.env.DATABASEURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongodb Connected..."))
  .catch((err) => console.log(err));

app.use("/", items);
app.use("/", users);
app.use("/", auth);

//MongoDB online
mongoose.set("useFindAndModify", false);

//Serve static assets if in production
if(process.env.NODE_ENV === 'production'){
  //Set static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) =>{
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Listening to port ${port}`));
