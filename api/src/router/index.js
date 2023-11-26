const { Router } = require('express');
// Importar todos los routers;
const contacRoute = require('./contacRouter');
const userRoute = require('./usersRouter');

const router = Router();

// Configurar los routers
router.use('/user' , userRoute );
router.use('/contac', contacRoute);

module.exports = router;