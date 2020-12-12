import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import InputField from "../../components/common/InputField";
import ToastNotify from "../../components/common/ToastNotify";
import { signIn } from "../../redux/actions/user";
import fetchClient from "../../config/fetchClient";

const signInValidationSchema = yup.object({
  usernameOrEmail: yup.string().required(),
  password: yup.string().required(),
});

const SignIn = ({ setIsSignIn }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Formik
        initialValues={{ usernameOrEmail: "", password: "" }}
        validationSchema={signInValidationSchema}
        onSubmit={async (values, { setErrors, setSubmitting }) => {
          try {
            const res = await fetchClient().post("api/users/sign-in", values);
            setSubmitting(false);
            ToastNotify({
              title: "Sign in successful",
              description: "Please wait",
              status: "success",
            });
            dispatch(signIn(res.data));
          } catch (err) {
            setSubmitting(false);
            if (err.response && err.response.data)
              return setErrors(err.response.data);
            ToastNotify({
              title: "Error",
              description: "Something error",
              status: "error",
            });
          }
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
  );
};

export default SignIn;
