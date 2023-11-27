const { Router } = require('express');
const router = Router();
const { getAllUser, postNewUser, putUpdateUser, deleteUser } = require('../controller/controllerUser');

router.get('/', getAllUser);
router.put('/:id', putUpdateUser);
router.delete('/:id', deleteUser);
router.post('/',postNewUser);

module.exports = router;