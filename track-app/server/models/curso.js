const mongoose = require("mongoose");
const { Schema } = mongoose;

const cursoSchema = new Schema({
  materia: { type: String },
  sede: { type: String },
  dias: { type: String },
  cuatrimestre: { type: String },
  anio: { type: Number },
  alumnos: {type: []},
  profesores: {type: []}
});

module.exports = mongoose.model("Curso", cursoSchema);
