// contactRouter.js
const { Router } = require('express');
const router = Router();
const contactMiddleware = require('../middlewares/contactMiddleware');
const {  getAllContact, postNewContact, updateContact, deleteContact} = require('../controller/controllerContact');

router.use(contactMiddleware);

router.get('/contacts/:userId', getAllContact);
router.post('/:userId', postNewContact);
router.put('/:userId/contacts/:contactId', updateContact);
router.delete('/:userId/contacts/:contactId', deleteContact);

module.exports = router;