import { Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <Flex minH="100vh" justify="center" align="center" p="6">
      <Box w={{ base: "100%", md: "40%", xl: "20%" }}>
        {isSignIn ? (
          <SignIn setIsSignIn={setIsSignIn} />
        ) : (
          <SignUp setIsSignIn={setIsSignIn} />
        )}
      </Box>
    </Flex>
  );
};

export default Auth;
