

const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const app = express();

const date = require(__dirname + "/date.js")


app.use(express.static("public"));
let items = [];


app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));




app.get("/", function(req,res){
  let day = date.getDay();
  // console.log(items);
  res.render("list", {list_title: day, newListItems: items});
});

app.post("/", function(req,res){
  let item = req.body.newItem;
  if(item === ""){
    res.redirect("/");
    console.log("Write something!");
  }else{
    items.push(item);

  }
  

  // console.log(item);
  res.redirect("/");
});



app.listen(3000, function(){
  console.log("Server started on port 3000");
});
