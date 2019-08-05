const mongoose = require("mongoose");
const { Schema } = mongoose;

const profesorSchema = new Schema({
  nombre: { type: String },
  apellido: { type: String },
  alumnos: [{ nombreYApellido: String }]
});

module.exports = mongoose.model("Prof", profesorSchema);
module.exports 
