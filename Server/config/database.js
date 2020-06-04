const mongoose = require("mongoose");
const db = mongoose.connection;
function init() {
  mongoose.connect("mongodb://admin:admin1@ds153552.mlab.com:53552/kathy");
}
db.once("open",function() {
  console.log("mongodb connect.");
});
module.exports=init;