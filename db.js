const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://Raghad:Raghad997*@traineefuture-f1aub.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true})
.then( () => {
   console.log('Connection to the Atlas Cluster is successful!')
 })
 .catch( (err) => console.error(err));


const db = mongoose.connection;
db.on("error", function() {
  console.log("mongoose connection error");
  console.log("____________________________");
});
db.once("open", function() { 
  console.log("mongoose connected successfully");
  console.log("____________________________");
});
//____________________________________________________ALL SCHEMA

let trainee = new mongoose.Schema({
  fullName: String,
  email: String,
  gender: String,
  university: String,
  password: String,
  img_path: String,
  field: String,
  role : String
});

let companies = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  website: String,
  city: String,
  location: String,
  comp_description: String,
  img_path: String,
  field: String,
  role : String,
  post: [
    {
      img_path: String,
      job_description: String,
      field: String,
      comments: [{ body: String }]
    }
  
  ]
});

let owner = new mongoose.Schema({
  name : String,
  email: String,
  password : String,
  role : String,

  LandingPageTopContant:String,
  LandingPageSecondContant: String


});

//____________________________________________________END ALL SCHEMA

let Trainee = mongoose.model("trainee", trainee);
let Companies = mongoose.model("companies", companies);
let Owner = mongoose.model("owner", owner);


