import Joi from "joi";

const contactsAddSchema = Joi.object({
  name: Joi.string().messages({
    "any.required": `missing required name field`,
  }),
  email: Joi.string().messages({
    "any.required": `missing required email field`,
  }),
  phone: Joi.string().messages({
    "any.required": `missing required phone field`,
  }),
});

export default contactsAddSchema;
