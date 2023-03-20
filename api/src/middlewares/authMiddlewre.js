const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  // Obtener el token de autorización de la cabecera de la solicitud
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  // Si no se proporciona un token, retornar un error de no autorizado
  if (!token) {
    return res.status(401).json({ message: 'No autorizado' });
  }

  try {
    // Verificar y decodificar el token
    const decodedToken = jwt.verify(token, 'test-key');

    // Agregar el objeto del usuario decodificado a la solicitud
    req.user = decodedToken;

    // Llamar a la siguiente función en la cadena de middleware
    next();
  } catch (err) {
    // Si el token no es válido, retornar un error de no autorizado
    return res.status(401).json({ message: 'No autorizado' });
  }
};

module.exports = authMiddleware;
