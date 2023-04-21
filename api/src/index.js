const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');

const app = express();

// Habilitar CORS
app.use(cors());

// Parsear el cuerpo de las solicitudes como JSON
app.use(express.json());

// Importar y usar las rutas de autenticación
const authRoutes = require("./routes/authRoutes");
app.use("/", authRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/esat_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Conexión a la base de datos establecida');
}).catch((err) => {
  console.error('Error al conectar a la base de datos:', err);
});

// Incluir las rutas de usuario y sentimientos
const feelingRoutes = require("./routes/feelingRoutes");
app.use("/api", feelingRoutes);

// Iniciar el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
