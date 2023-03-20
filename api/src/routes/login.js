const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require("../models/User");

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "no user found" });
    }

    if (user.password !== password) {
      return res.status(400).json({ message: "invalid password" });
    }

    // Crear el token JWT con la información del usuario
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      "test-key",
      { expiresIn: "1h" }
    );

    // Enviar el token en la respuesta
    res.json({ message: "ok", token, name: user.name });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

module.exports = router;