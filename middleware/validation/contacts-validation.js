import contactsSchemas from '../../schemas/contacts-schemas.js'
import {validateBody} from "../../decorators/index.js";

const addContactsValidate = validateBody(contactsSchemas.contactsAddSchema);

export default {
    addContactsValidate,
}