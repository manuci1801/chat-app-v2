import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import InputField from "../../components/common/InputField";
import ToastNotify from "../../components/common/ToastNotify";
import { signIn } from "../../redux/actions/user";
import fetchClient from "../../utils/fetchClient";

const signInValidationSchema = yup.object({
  usernameOrEmail: yup.string().required(),
  password: yup.string().required(),
});

const signUpValidationSchema = yup.object({
  name: yup.string().required().min(3).max(50),
  username: yup.string().required().min(3).max(50),
  email: yup.string().required().email(),
  password: yup.string().required().min(6).max(50),
  password2: yup.string().required().min(6).max(50),
});

const Auth = () => {
  const dispatch = useDispatch();

  const [isSignIn, setIsSignIn] = useState(true);

  const authBody = isSignIn ? (
    <>
      <Formik
        initialValues={{
          usernameOrEmail: "",
          password: "",
        }}
        validationSchema={signInValidationSchema}
        onSubmit={async (values, { setErrors }) => {
          console.log(values);
          fetchClient()
            .post("api/users/sign-in", values)
            .then(res => {
              ToastNotify({
                title: "Sign in successful",
                description: "Please wait",
                status: "success",
              });
              dispatch(signIn(res.data));
            })
            .catch(err => {
              console.log(err);
              if (err.response && err.response.data)
                return setErrors(err.response.data);
              ToastNotify({
                title: "Error",
                description: "Something error",
                status: "error",
              });
            });
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name="usernameOrEmail"
              label="Username or Email"
              placeholder="username or email"
            />
            <InputField
              name="password"
              label="Password"
              placeholder="password"
              type="password"
            />

            <Button
              mt={4}
              w="100%"
              colorScheme="teal"
              isLoading={isSubmitting}
              type="submit"
            >
              Sign In
            </Button>
          </Form>
        )}
      </Formik>
      <Box textAlign="center">
        Don't have an account yet?{" "}
        <Text
          onClick={() => setIsSignIn(false)}
          as="i"
          fontSize="md"
          color="tomato"
          cursor="pointer"
        >
          Create an account now
        </Text>
      </Box>
    </>
  ) : (
    <>
      <Formik
        initialValues={{
          name: "",
          username: "",
          email: "",
          password: "",
          password2: "",
        }}
        validationSchema={signUpValidationSchema}
        onSubmit={async (values, { setErrors }) => {
          console.log(values);
          fetchClient()
            .post("api/users/sign-up", values)
            .then(_ =>
              ToastNotify({
                title: "Signup successful",
                description:
                  "We have sent a email to you, please check it to verify account",
                status: "success",
              })
            )
            .catch(err => setErrors(err.response.data));
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField name="name" label="Name" placeholder="name" />
            <InputField
              name="username"
              label="Username"
              placeholder="username"
            />
            <InputField name="email" label="Email" placeholder="email" />
            <InputField
              name="password"
              label="Password"
              placeholder="password"
              type="password"
            />
            <InputField
              name="password2"
              label="Confirm Password"
              placeholder="confirm password"
              type="password"
            />

            <Button
              w="100%"
              mt={4}
              colorScheme="teal"
              isLoading={isSubmitting}
              type="submit"
            >
              Sign Up
            </Button>
          </Form>
        )}
      </Formik>
      <Box textAlign="center">
        Already a member?{" "}
        <Text
          onClick={() => setIsSignIn(true)}
          as="i"
          fontSize="md"
          color="tomato"
          cursor="pointer"
        >
          Login
        </Text>
      </Box>
    </>
  );

  return (
    <Flex minH="100vh" justify="center" align="center" p="6">
      <Box w={{ base: "100%", md: "60%", xl: "30%" }}>{authBody}</Box>
    </Flex>
  );
};

export default Auth;
