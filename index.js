const express = require("express")
const app = express();
const path = require("path");


const port = 8080;

app.set("view engine ","ejs");
app.set("Views", path.join(__dirname,"/Views"));

app.get("/",(req,res)=>{
  res.render("home.ejs");
  console.log ("success");
})

app.listen(port, ()=>{
  console.log(`server is working on port ${port}`);
})