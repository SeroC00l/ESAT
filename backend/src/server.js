const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Aquí deberás validar las credenciales del usuario y enviar una respuesta en consecuencia.
  // Puedes utilizar una base de datos para almacenar y verificar las credenciales del usuario.

  if (username === "usuario" && password === "contraseña") {
    res.json({ success: true, message: "Login Successfuly!" });
  } else {
    res
      .status(401)
      .json({ success: false, message: "Invalid Credentials" });
  }
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
