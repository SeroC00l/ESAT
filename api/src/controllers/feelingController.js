const Feeling = require("../models/FeelingModel");
const json2xls = require("json2xls");
const fs = require("fs");

const date = () => {
  let today = new Date();
  let fecha = today.toLocaleDateString("es-US");
  return fecha;
};

const feelingController = {
  createFeeling: async (req, res) => {
    try {
      const {
        name,
        emotion,
        jobRelated,
        resing,
        message,
        area,
        rol,
        supervisor,
      } = req.body;

      const newFeeling = new Feeling({
        name,
        area,
        rol,
        supervisor,
        emotion,
        jobRelated,
        resing,
        message,
      });

      const savedFeeling = await newFeeling.save();

      res.status(201).json(savedFeeling);
    } catch (err) {
      console.error(err);
      res.status(500).send("Error saving feeling");
    }
  },

  getFeelingById: async (req, res) => {
    try {
      const { id } = req.params;

      const feeling = await Feeling.findById(id);

      if (!feeling) {
        res.status(404).send("Feeling not found");
      } else {
        res.json(feeling);
      }
    } catch (err) {
      console.error(err);
      res.status(500).send("Error retrieving feeling");
    }
  },

  updateFeeling: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, emotion, jobRelated, resing, message } = req.body;

      const updatedFeeling = await Feeling.findByIdAndUpdate(
        id,
        {
          name,
          emotion,
          jobRelated,
          resing,
          message,
        },
        { new: true }
      );

      if (!updatedFeeling) {
        res.status(404).send("Feeling not found");
      } else {
        res.json(updatedFeeling);
      }
    } catch (err) {
      console.error(err);
      res.status(500).send("Error updating feeling");
    }
  },

  deleteFeeling: async (req, res) => {
    try {
      const { id } = req.params;

      const deletedFeeling = await Feeling.findByIdAndDelete(id);

      if (!deletedFeeling) {
        res.status(404).send("Feeling not found");
      } else {
        res.json(deletedFeeling);
      }
    } catch (err) {
      console.error(err);
      res.status(500).send("Error deleting feeling");
    }
  },

  getDifferentSupervisors: async (req, res) => {
    try {
      const supervisors = await Feeling.distinct("supervisor");
      res.json(supervisors);
    } catch (err) {
      console.error(err);
      res.status(500).send("Error retrieving differents supervisors");
    }
  },

  updateActionTaken: async (req, res) => {
    try {
      const { id } = req.params;
      const { actionTaken } = req.body;
      const { actionTaker } = req.body;

      const updatedFeeling = await Feeling.findByIdAndUpdate(
        id,
        {
          actionTaken,
          takeAction: "action taken by " + actionTaker + " at " + date(),
        },
        { new: true }
      );

      if (!updatedFeeling) {
        res.status(404).send("Feeling not found");
      } else {
        res.json(updatedFeeling);
      }
    } catch (err) {
      console.error(err);
      res.status(500).send("Error updating action taken");
    }
  },

  updateSecondAction: async (req, res) => {
    try {
      const { id } = req.params;
      const { secondAction } = req.body;

      const updatedFeeling = await Feeling.findByIdAndUpdate(
        id,
        {
          secondAction,
        },
        { new: true }
      );

      if (!updatedFeeling) {
        res.status(404).send("Feeling not found");
      } else {
        res.json(updatedFeeling);
      }
    } catch (err) {
      console.error(err);
      res.status(500).send("Error updating action taken");
    }
  },

  exportTOExcel: async (req, res) => {
    try {
      // Obtener los documentos que quieres exportar de la colección
      const docs = await Feeling.find({ area: "Complete" });

      // Convertir los documentos a formato JSON
      const jsonDocs = docs.map((doc) =>
        doc.toJSON({
          transform: (doc, ret) => {
            delete ret._id;
            delete ret.__v;
            return ret;
          },
        })
      );

      // Convertir el JSON a formato Excel
      const xls = json2xls(jsonDocs);

      // Establecer las cabeceras de la respuesta para descargar el archivo
      res.setHeader(
        "Content-disposition",
        "attachment; filename=exportacion.xlsx"
      );
      res.setHeader(
        "Content-type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      );

      // Enviar la hoja de cálculo como respuesta
      res.send(xls);
    } catch (err) {
      console.error("Error al exportar la hoja de cálculo", err);
      res.status(500).send("Error al exportar la hoja de cálculo");
    }
  },
};

module.exports = feelingController;
