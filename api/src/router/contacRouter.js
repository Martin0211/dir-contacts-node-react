// contactRouter.js
const { Router } = require('express');
const router = Router();
const userMiddleware = require('../middlewares/userMiddleware');
const {  getAllContact, postNewContact, updateContact, deleteContact} = require('../controller/controllerContact');

router.use(userMiddleware);

router.get('/contacts/:userId', getAllContact);
router.post('/:userId', postNewContact);
router.put('/:userId/contacts/:contactId', updateContact);
router.delete('/:userId/contacts/:contactId', deleteContact);

module.exports = router;