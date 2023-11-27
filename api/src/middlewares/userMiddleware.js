// userMiddleware.js
const userMiddleware = (req, res, next) => {
  // Intenta obtener userId del cuerpo de la solicitud (para POST)
  const userIdFromBody = req.body.userId;

  // Intenta obtener userId de los parámetros de la URL (para GET)
  const userIdFromParams = req.params.userId;

  // Asigna userId a req.userId, dándole prioridad al valor del cuerpo
  req.userId = userIdFromBody || userIdFromParams;

  next();
};

module.exports = userMiddleware;