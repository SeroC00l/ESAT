const mongoose = require("mongoose");

let today = new Date();

const feelingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  area: { type: String, required: true },
  rol: { type: String, required: true },
  supervisor: { type: String, required: true },
  emotion: { type: String, required: true },
  jobRelated: { type: Boolean, required: true },
  resing: { type: Boolean, required: true },
  message: { type: String, required: false },
  date: {
    type: String,
    default: () => {
      let fecha = today.toISOString().slice(0, 10);
      return fecha;
    },
  },
  time: {
    type: String,
    default: () => {
      let hora = today.toLocaleTimeString("es-US");
      return hora;
    },
  },
  takeAction: { type: mongoose.Schema.Types.Mixed, default: false },
  actionTaken: { type: String, default: "" },
});

const Feeling = mongoose.model("Feeling", feelingSchema);

module.exports = Feeling;
