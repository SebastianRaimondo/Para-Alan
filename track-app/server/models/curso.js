const mongoose = require("mongoose");
const { Schema } = mongoose;

const cursoSchema = new Schema({
  materia: { type: String },
  sede: { type: String },
  dias: { type: String },
  cuatrimestre: { type: String },
  anio: { type: Number },
  alumnos: [{ type: Schema.Types.ObjectId, ref: "Alu" }],
  profesores: [{ type: Schema.Types.ObjectId, ref: "Prof" }],
  asignaciones: [
    {
      profesor: { type: Schema.Types.ObjectId, ref: "Prof" },
      alumno: { type: Schema.Types.ObjectId, ref: "Alu" }
    }
  ]
});

module.exports = mongoose.model("Curso", cursoSchema);
