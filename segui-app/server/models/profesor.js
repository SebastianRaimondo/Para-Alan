const mongoose = require("mongoose");
const { Schema } = mongoose;

const profesorSchema = new Schema({
  nombre: { type: String },
  apellido: { type: String }
});

module.exports = mongoose.model("Prof", profesorSchema);
