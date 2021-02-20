import { Box, Button, Grid } from "@chakra-ui/react";
import React, { useState, useEffect, useRef } from "react";
import Peer from "simple-peer";

const VideoItem = props => {
  console.log(props);
  const ref = useRef();

  useEffect(() => {
    props.peer.on("stream", stream => {
      ref.current.srcObject = stream;
    });
  }, []);

  return <video playsInline autoPlay ref={ref} />;
};

const VideoContainer = ({ setIsChat, socket, ...props }) => {
  const [peers, setPeers] = useState([]);
  const socketRef = useRef();
  const userVideo = useRef();
  const peersRef = useRef([]);
  const roomID = "123";

  useEffect(() => {
    if (userVideo.current)
      navigator.mediaDevices
        .getUserMedia({ video: { height: "100%", width: "100%" }, audio: true })
        .then(stream => {
          userVideo.current.srcObject = stream;
          socket.emit("join room", roomID);
          socket.on("all users", users => {
            console.log(users);
            const peers = [];
            users.forEach(userID => {
              const peer = createPeer(userID, socket.id, stream);
              peersRef.current.push({
                peerID: userID,
                peer,
              });
              peers.push(peer);
            });
            setPeers(peers);
          });

          socket.on("user joined", payload => {
            const peer = addPeer(payload.signal, payload.callerID, stream);
            peersRef.current.push({
              peerID: payload.callerID,
              peer,
            });

            setPeers(users => [...users, peer]);
          });

          socket.on("receiving returned signal", payload => {
            const item = peersRef.current.find(p => p.peerID === payload.id);
            item.peer.signal(payload.signal);
          });
        });
  }, [userVideo]);

  function createPeer(userToSignal, callerID, stream) {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream,
    });

    peer.on("signal", signal => {
      socket.emit("sending signal", {
        userToSignal,
        callerID,
        signal,
      });
    });

    return peer;
  }

  function addPeer(incomingSignal, callerID, stream) {
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream,
    });

    peer.on("signal", signal => {
      socket.emit("returning signal", { signal, callerID });
    });

    peer.signal(incomingSignal);

    return peer;
  }

  function deletePeer(userId) {}

  return (
    <>
      <Box>
        <Button onClick={() => setIsChat(true)}>Back</Button>
      </Box>

      <Box>
        <Grid w="100%" templateColumns="repeat(3, 1fr)" gap={6}>
          <video
            style={{ width: "100%" }}
            muted
            ref={userVideo}
            autoPlay
            playsInline
          />
          {peers.map((peer, index) => {
            return <VideoItem key={index} peer={peer} />;
          })}
        </Grid>
      </Box>
    </>
  );
};

export default VideoContainer;
