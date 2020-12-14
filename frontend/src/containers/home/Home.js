import { Flex } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import socketClient from "socket.io-client";
import ChatContainer from "./ChatContainer";
import VideoContainer from "./VideoContainer";

function Home() {
  const [socket, setSocket] = useState({});
  const [isChat, setIsChat] = useState(true);

  // config socket client
  useEffect(() => {
    setSocket(socketClient.connect("http://localhost:5005"));
  }, []);

  return (
    <>
      {socket ? (
        isChat ? (
          <ChatContainer setIsChat={setIsChat} socket={socket} />
        ) : (
          <VideoContainer setIsChat={setIsChat} socket={socket} />
        )
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default Home;
