import express from "express";

import contactsController from "../../controllers/contacts-controller.js";

import validateBody from "../../decorators/validateBody.js";
import contactsAddSchema from "../../schemas/contacts-schemas.js";

const contactsRouter = express.Router();

contactsRouter.get("/", contactsController.getAllContacts);

contactsRouter.get("/:contactId", contactsController.getByIdContacts);

contactsRouter.post(
  "/",
  validateBody(contactsAddSchema),
  contactsController.addContacts
);

contactsRouter.delete("/:contactId", contactsController.deleteByIdContacts);

contactsRouter.put(
  "/:contactId",
  validateBody(contactsAddSchema),
  contactsController.updateByIdContacts
);

export default contactsRouter;
