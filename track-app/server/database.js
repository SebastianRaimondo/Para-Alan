const mongoose = require("mongoose");
const URI = "mongodb://localhost/segui-app";

mongoose
  .connect(URI, { useNewUrlParser: true })
  .then(db => console.log("pedro anido connected"))
  .catch(err => console.error(err));

module.exports = mongoose;
