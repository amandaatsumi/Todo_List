
const express = require("express");
const bodyParser= require("body-parser");

const app = express();

let items = [];

app.set('view engine', 'ejs'); //ok

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true})); //ok

app.get("/", function(req, res){ //ok

let today = new Date();     //ok
let options = {             //ok
  weekday: "long",          //ok
  day: "numeric",           //ok
  month: "long",           //ok
  year: "numeric"           //ok
};

let day = today.toLocaleDateString("en-US", options); //ok

  res.render("list", {kindOfDay: day, newListItems: items});           //ok
});

app.post("/", function (req, res){    //ok
let item = req.body.newItem;           //ok

items.push(item);           //ok

  res.redirect("/");
});

app.listen(3000,function(){
  console.log("Server started on Port 3000");
});

// Other Way to Write this Code
//
// const express = require("express");
// const bodyParser= require("body-parser");
//
// const app = express();
//
// app.set('view engine', 'ejs');
//
// app.get("/", function(req, res){
//
// var today = new Date();
// var currentDay = today.getDay();
// var day = "";
// switch (currentDay){
//   case 0:
//   day = "Sunday";
//   break;
//   case 1:
//   day = "Monday";
//   break;
//   case 2:
//   day = " Tuesday";
//   break;
//   case 3:
//   day = "Wednesday";
//   break;
//   case 4:
//   day = "Thursday";
//   break;
//   case 5:
//   day = "Friday";
//   break;
//   case 6:
//   day = "Saturday";
//   break;
//   default:
//   console.log("Error: wrong day!");
// }
//   res.render("list", {
//     kindOfDay: day
// });
// });
//
// app.listen(3000,function(){
//   console.log("Server started on Port 3000");
// });
