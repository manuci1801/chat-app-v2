const { CONTACT_STATUS } = require("../config/keys");
const Contact = require("../models/Contact");

/**
 * add a new contact (new contact will in user's pending contacts)
 * @param {*} req
 * @param {*} res
 */
const addContact = async (req, res) => {
  try {
    const { id } = req.user;
    const { contactId } = req.body;
    // check is exist in db
    if (id === contactId)
      return res.status(400).json({ contact: "You can not add yourself" });
    const contactExist = await Contact.findOne({
      $or: [
        { user: id, contact: contactId },
        { user: contactId, contact: id },
      ],
    });
    if (contactExist)
      return res.status(400).json({ contact: "This person was your contact" });
    // create new one and save to db
    const contact = new Contact({
      user: id,
      contact: contactId,
    });
    await contact.save();
    res.json(contact);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

/**
 * get all contacts of user
 * @param {*} req
 * @param {*} res
 */
const getContacts = async (req, res) => {
  try {
    const { id } = req.user;
    const contacts = await Contact.find({
      $and: [
        { status: CONTACT_STATUS.CONFIRM },
        {
          $or: [{ user: id }, { contact: id }],
        },
      ],
    });
    res.json(contacts);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

/**
 * get all pending contacts of user (pending contacts is request of user to other users)
 * @param {*} req
 * @param {*} res
 */
const getPendingContacts = async (req, res) => {
  try {
    const { id } = req.user;
    const contacts = await Contact.find({
      $and: [{ status: CONTACT_STATUS.PENDING }, { user: id }],
    });
    res.json(contacts);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

/**
 * get all request contacts of user (request contacts is request of other users to user)
 * @param {*} req
 * @param {*} res
 */
const getRequestContacts = async (req, res) => {
  try {
    const { id } = req.user;
    const contacts = await Contact.find({
      $and: [{ status: CONTACT_STATUS.PENDING }, { contact: id }],
    });
    res.json(contacts);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

/**
 * cancel contact (include confirm, pending and request contact)
 * @param {*} req
 * @param {*} res
 */
const deleteContact = async (req, res) => {
  try {
    const { id } = req.user;
    const { contactId } = req.body;
    if (!contactId)
      return res.status(400).json({ contact: "contactId is required" });
    const contact = await Contact.findOneAndDelete({
      $and: [{ _id: contactId }, { $or: [{ user: id }, { contact: id }] }],
    });
    if (!contact) return res.status(401).json({ authorized: "Unauthorized" });
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = {
  addContact,
  getContacts,
  getPendingContacts,
  getRequestContacts,
  deleteContact,
};
