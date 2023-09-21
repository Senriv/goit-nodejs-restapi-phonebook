import express from "express";

import contactsController from "../../controllers/contacts-controller.js";

import validateBody from "../../decorators/validateBody.js";
import {
  contactsAddSchema,
  contactsUpdateFavoriteSchema,
} from "../../models/Contact.js";
import { authenticate, isValidId } from "../../middlewares/index.js";

const contactsRouter = express.Router();

contactsRouter.use(authenticate);

contactsRouter.get("/", contactsController.getAllContacts);

contactsRouter.get(
  "/:contactId",
  isValidId,
  contactsController.getByIdContacts
);

contactsRouter.post(
  "/",
  validateBody(contactsAddSchema),
  contactsController.addContacts
);

contactsRouter.delete(
  "/:contactId",
  isValidId,
  contactsController.deleteByIdContacts
);

contactsRouter.put(
  "/:contactId",
  isValidId,
  validateBody(contactsAddSchema),
  contactsController.updateByIdContacts
);

contactsRouter.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(contactsUpdateFavoriteSchema),
  contactsController.updateByIdContacts
);

export default contactsRouter;
