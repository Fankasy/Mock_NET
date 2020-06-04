const express = require("express");
var bodyParser = require("body-parser");
const path = require("path");
const mongooseConnect = require("./config/database");
const app = new express();
mongooseConnect();
// const Users = require("./routes/api/userRoute");
const User = require("./models/users.js");


// Server Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use((req,res,next)=>{
  console.log("A "+req.method+" request recevied"+new Date());
  next();
});
// app.use('/api/users',Users);
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    next();
});

app.get("/api/lists",(req,res)=>{
  User.find({},function(err,users) {
    if (err) {
      res.status(500).json({error:err});
    }else {
      res.status(200).json(users);
    }
  });
});





app.listen(5000,()=>{
  console.log("Listening to port 5000.");
})