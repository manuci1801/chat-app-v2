import { Button } from "@chakra-ui/react";
import React from "react";

const Video = ({ setIsChat, socket }) => {
  const testSocket = () => {
    socket.emit("test", { test: true });
  };

  return (
    <>
      <Button onClick={() => setIsChat(true)}>Back</Button>
      <Button onClick={() => testSocket()}>Test</Button>
    </>
  );
};

export default Video;
