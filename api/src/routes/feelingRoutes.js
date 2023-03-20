const express = require("express");
const router = express.Router();
const feelingController = require("../controllers/feelingController");

// Rutas para los sentimientos
router.post("/", feelingController.createFeeling);
router.get("/:id", feelingController.getFeelingById);
router.put("/:id", feelingController.updateFeeling);
router.delete("/:id", feelingController.deleteFeeling);

module.exports = router;