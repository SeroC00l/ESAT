const express = require('express');
const User = require('../models/User');
const router = express.Router();
const loginRouter = require('./login');
const feelingRouter = require('./feelingRoutes');


router.use('/auth', loginRouter);

// Ruta para obtener todos los usuarios
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

//rurtas feelings
module.exports = router;