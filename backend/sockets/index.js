const chatSocket = require("./chat");
const videoSocket = require("./video");

const rootSocket = (io) => {
  io.on("connection", (socket) => {
    console.log(`user connected: ${socket.id}`);
    chatSocket(socket);
    videoSocket(socket);

    socket.on("disconnect", function () {
      console.log("user disconnect!");
    });
  });
  return io;
};

module.exports = rootSocket;
