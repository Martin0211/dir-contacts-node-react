const {Router} = require('express');
const router = Router();
/* const { getContac } = require('../controllers/controllerContac'); */

router.get('/', (req, res) => {
    res.send("soy el get de user")
});

router.post('/', (req, res) => {
    res.send("soy el post de user")
});

module.exports = router;