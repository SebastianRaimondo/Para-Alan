const mongoose = require("mongoose");
const { Schema } = mongoose;

const asigPro_AlumSchema = new Schema({
  alumno: { type: Schema.Types.ObjectId, ref: "Alu" },
  profesor: { type: Schema.Types.ObjectId, ref: "Prof" }
});

module.exports = mongoose.model("asigPro_Alum", asigPro_AlumSchema);
