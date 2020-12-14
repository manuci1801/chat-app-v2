const mongoose = require("mongoose");

const { CONTACT_STATUS } = require("../config/keys");

const contactSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  contact: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  status: {
    type: String,
    enum: [CONTACT_STATUS.PENDING, CONTACT_STATUS.CONFIRM],
    default: CONTACT_STATUS.PENDING,
  },
  createdAt: {
    type: Number,
    default: Date.now(),
  },
});

module.exports = mongoose.model("contacts", contactSchema);
