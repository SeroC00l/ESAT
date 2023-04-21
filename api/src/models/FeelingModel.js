const mongoose = require("mongoose");

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
      let today = new Date();
      let fecha = today.toISOString().slice(0, 10);
      return fecha;
    },
  },
  time: {
    type: String,
    default: () => {
      let today = new Date();
      let hora = today.toLocaleTimeString("es-US");
      return hora;
    },
  },
  takeAction: { type: mongoose.Schema.Types.Mixed, default: false },
  actionTaken: { type: String, default: "" },
  secondAction: { type: mongoose.Schema.Types.Mixed, default: false },
});

const Feeling = mongoose.model("Feeling", feelingSchema);

module.exports = Feeling;
