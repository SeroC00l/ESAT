const mongoose = require("mongoose");

let today = new Date();

// obtener la fecha de hoy en formato `MM/DD/YYYY`
let fecha = today.toLocaleDateString("en-US");

// obtener la hora en la configuración regional de EE. UU.
let hora = today.toLocaleTimeString("en-US");

const feelingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  area: { type: String, required: true },
  emotion: { type: String, required: true },
  jobRelated: { type: Boolean, required: true },
  resing: { type: Boolean, required: true },
  message: { type: String, required: false },
  createdAt: { type: String, default: fecha + " " + hora }
});

const Feeling = mongoose.model("Feeling", feelingSchema);

module.exports = Feeling;
