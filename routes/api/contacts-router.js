import express from "express";

import contactsController from "../../controllers/contacts-controller.js";
import contactsValidation from "../../middleware/validation/contacts-validation.js";

const contactsRouter = express.Router()

contactsRouter.get('/', contactsController.getAllContacts)

contactsRouter.get('/:contactId', contactsController.getByIdContacts)

contactsRouter.post('/',contactsValidation.addContactsValidate, contactsController.addContacts)

contactsRouter.delete('/:contactId', contactsController.deleteByIdContacts)

contactsRouter.put('/:contactId',contactsValidation.addContactsValidate, contactsController.updateByIdContacts)

export default contactsRouter;
