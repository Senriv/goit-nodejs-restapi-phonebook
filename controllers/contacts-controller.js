import Contact from "../models/Contact.js";
import { HttpError } from "../helpers/index.js";
import { ctrlWrapper } from "../decorators/index.js";

const getAllContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 20 } = req.query;
  const skip = (page - 1) * limit;
  const result = await Contact.find({ owner }, "", { skip, limit });
  res.json(result);
};

const getByIdContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const { contactId } = req.params;
  const result = await Contact.findById(contactId, owner);
  if (!result) {
    throw HttpError(404, `Not found`);
  }
  res.json(result);
};

const addContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Contact.create({ ...req.body, owner });
  res.status(201).json(result);
};

const updateByIdContacts = async (req, res) => {
  if (Object.keys(req.body).length === 0) {
    throw HttpError(400, "missing fields");
  }
  const { _id: owner } = req.user;
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, owner, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, `Not found`);
  }
  res.json(result);
};

const deleteByIdContacts = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndDelete(contactId);
  if (!result) {
    throw HttpError(404, `Not found`);
  }
  res.json({
    message: "Contact deleted",
  });
};

export default {
  getAllContacts: ctrlWrapper(getAllContacts),
  getByIdContacts: ctrlWrapper(getByIdContacts),
  addContacts: ctrlWrapper(addContacts),
  updateByIdContacts: ctrlWrapper(updateByIdContacts),
  deleteByIdContacts: ctrlWrapper(deleteByIdContacts),
};
