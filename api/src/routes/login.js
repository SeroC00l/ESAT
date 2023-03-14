const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: "Usuario no encontrado" });
    }

    if (user.password !== password) {
      return res.status(400).json({ error: "Contraseña incorrecta" });
    }

    // Aquí puedes crear un token de autenticación y enviarlo en la respuesta
    res.json({ message: "ok" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

module.exports = router;
