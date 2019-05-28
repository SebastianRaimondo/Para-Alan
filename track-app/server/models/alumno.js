const mongoose = require("mongoose");
const { Schema } = mongoose;

const alumnoSchema = new Schema({
  nombre: { type: String },
  apellido: { type: String },
  nLegajo: { type: Number },
  email: { type: String },
  userGit: { type: String },
  pAsignados: { type: String }
});

module.exports = mongoose.model("Alu", alumnoSchema);
