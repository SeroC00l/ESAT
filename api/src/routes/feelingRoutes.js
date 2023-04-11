const express = require("express");
const router = express.Router();
const feelingController = require("../controllers/feelingController");
const Feeling = require("../models/FeelingModel")

// Rutas para los sentimientos
router.post("/", feelingController.createFeeling);
router.get('/feelings', async (req, res) => {
    try {
      const feelings = await Feeling.find();
      res.json(feelings);
    } catch (err) {
      console.error(err);
      res.status(500).send('Error retrieving feelings');
    }
  });
router.get('/supervisors', feelingController.getDifferentSupervisors);
router.put("/:id", feelingController.updateFeeling);
router.patch("/:id", feelingController.updateActionTaken);
router.delete("/:id", feelingController.deleteFeeling);

module.exports = router;