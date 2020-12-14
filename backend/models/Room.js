const mongoose = require("mongoose");

const { ROOM_TYPE } = require("../config/keys");

const conversationSchema = mongoose.Schema({
  name: {
    type: String,
  },
  member: [
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
  // lastMessage: {
  //   user: {
  //     type: mongoose.Schema.Types.ObjectId,
  //       ref: "users",
  //   },
  //   content: {

  //   },
  //   createdAt: {
  //     type: Number,
  //     default: Date.now(),
  //   },
  // },
  createdAt: {
    type: Number,
    default: Date.now(),
  },
});

module.exports = mongoose.model("rooms", conversationSchema);
