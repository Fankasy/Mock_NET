const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  title: String,
  id: Number,
  img: String,
  category: String
});

let User = mongoose.model('users',userSchema);

module.exports=User;