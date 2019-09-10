const mongoose = require("mongoose");
const { Schema } = mongoose;

const alumnoSchema = new Schema({
  nombre: { type: String },
  apellido: { type: String },
  nLegajo: { type: Number },
  email: { type: String },
  userGit: { type: String },
  asignadoA: Schema.Types.ObjectId
});

module.exports = mongoose.model("Alu", alumnoSchema);
