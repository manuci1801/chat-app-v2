import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import InputField from "components/common/InputField";
import ToastNotify from "components/common/ToastNotify";
import { signIn } from "redux/actions/user";
import fetchClient from "config/fetchClient";
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
