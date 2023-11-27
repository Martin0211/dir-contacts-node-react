const contactsMiddleware = (req, res, next) => {
    // Intenta obtener userId del cuerpo de la solicitud (para POST)
  const contactIdFromBody = req.body.contactId;

  // Intenta obtener userId de los parámetros de la URL (para GET)
  const contactIdFromParams = req.params.contactId;

  // Asigna userId a req.userId, dándole prioridad al valor del cuerpo
  req.contactId = contactIdFromBody || contactIdFromParams;

  next();
  };
  
  module.exports = contactsMiddleware;