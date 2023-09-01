import contactMethods from "../models/contacts/contacts.js";
import { HttpError } from "../helpers/index.js";
import { ctrlWrapper } from "../decorators/index.js";

const getAllContacts = async (req, res) => {
  const result = await contactMethods.listContacts();
  res.json(result);
};

const getByIdContacts = async (req, res) => {
  const { contactId } = req.params;
  const result = await contactMethods.getContactById(contactId);
  if (!result) {
    throw HttpError(404, `Not found`);
  }
  res.json(result);
};

const addContacts = async (req, res) => {
  const result = await contactMethods.addContact(req.body);
  res.status(201).json(result);
};

const updateByIdContacts = async (req, res) => {
  const { contactId } = req.params;
  const result = await contactMethods.updateContact(contactId, req.body);
  if (!result) {
    throw HttpError(404, `Not found`);
  }
  res.json(result);
};

const deleteByIdContacts = async (req, res) => {
  const { contactId } = req.params;
  const result = await contactMethods.removeContact(contactId);
  if (!result) {
    throw HttpError(404, `Not found`);
  }
  res.json({
    message: "contact deleted",
  });
};

export default {
  getAllContacts: ctrlWrapper(getAllContacts),
  getByIdContacts: ctrlWrapper(getByIdContacts),
  addContacts: ctrlWrapper(addContacts),
  updateByIdContacts: ctrlWrapper(updateByIdContacts),
  deleteByIdContacts: ctrlWrapper(deleteByIdContacts),
};
