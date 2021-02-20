const { ROOM_TYPE } = require("../config/keys");
const Room = require("../models/Room");

/**
 * create a new room with room type is group
 * @param {*} req
 * @param {*} res
 */
const createRoom = async (req, res) => {
  try {
    const { members } = req.body;
    const room = new Room({
      members,
      type: ROOM_TYPE.GROUP,
    });
    await room.save();
    res.json(room);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

/**
 * get all rooms of user
 * @param {*} req
 * @param {*} res
 */
const getRooms = async (req, res) => {
  try {
    const { id } = req.user;
    const rooms = await Room.find({ members: { $elemMatch: { user: id } } });
    res.json(rooms);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = {
  createRoom,
  getRooms,
};
