const mongoose = require('mongoose');

// URL de conexión a la base de datos
const url = 'mongodb://localhost:27017/esat_db';

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Conexión a la base de datos establecida');
}).catch((err) => {
  console.error('Error al conectar a la base de datos', err);
});

module.exports = mongoose.connection;