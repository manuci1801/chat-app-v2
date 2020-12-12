import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import InputField from "../../components/common/InputField";
import ToastNotify from "../../components/common/ToastNotify";
import { signIn } from "../../redux/actions/user";
import fetchClient from "../../config/fetchClient";

const signUpValidationSchema = yup.object({
  name: yup.string().required().min(3).max(50),
  username: yup.string().required().min(3).max(50),
  email: yup.string().required().email(),
  password: yup.string().required().min(6).max(50),
  password2: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "Confirm password must match"),
});

const SignUp = ({ setIsSignIn }) => {
  return (
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
        onSubmit={async (values, { setErrors, setSubmitting }) => {
          try {
            await fetchClient().post("api/users/sign-up", values);
            setSubmitting(false);
            ToastNotify({
              title: "Signup successful",
              description:
                "We have sent a email to you, please check it to verify account",
              status: "success",
            });
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
              mt={4}
              w="100%"
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
};

export default SignUp;
