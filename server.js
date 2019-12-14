const express = require("express");
const cors = require("cors");
const DB = require("./db");
const app = express();
const path = require('path');

app.use(express.json());
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});



app.get("/", (req, res) => {
  res.json(`SERVER WORKING`);
});





const PORT = 9000;
app.listen(PORT, () => console.log(`Server listening to ${PORT}`));





// __________________________________________________________________________
// let trainee = new mongoose.Schema({
//   fullName: String,
//   email: String,
//   gender: String,
//   university: String,
//   password: String,
//   img_path: String,
//   field: String,
//   role : String
// });

// let companies = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String,
//   website: String,
//   city: String,
//   location: String,
//   comp_description: String,
//   img_path: String,
//   field: String,
//   role : String,
//   post: [
//     {
//       img_path: String,
//       job_description: String,
//       field: String,
//       comments: [{ body: String }]
//     }
  
//   ]
// });

// let Owner = new mongoose.Schema({
//   name : String,
//   email: String,
//   password : String,
//   role : String,

//   LandingPageTopContant:String,
//   LandingPageSecondContant: String


// })