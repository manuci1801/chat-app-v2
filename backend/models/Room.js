const mongoose = require("mongoose");

const { ROOM_TYPE } = require("../config/keys");

const conversationSchema = mongoose.Schema({
  name: {
    type: String,
  },
  members: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
      },
      nickname: {
        type: String,
      },
    },
  ],
  type: {
    type: String,
    enum: [ROOM_TYPE.PRIVATE, ROOM_TYPE.GROUP],
    default: ROOM_TYPE.PRIVATE,
  },
  lastMessage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "messages",
  },
  createdAt: {
    type: Number,
    default: Date.now(),
  },
});

module.exports = mongoose.model("rooms", conversationSchema);
