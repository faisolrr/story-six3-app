import React from "react";
import { useForm } from "@mantine/form";

import { TextInput, PasswordInput } from "@mantine/core";
import LoginButton from "./LoginButton";
import RegisButton from "../Register/RegisButton";

function LoginInput() {
  const form = useForm({
    initialValues: { email: "", password: "" },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value, values) =>
        value !== values.password
          ? "Password must be at least 6 characters"
          : null,
    },
  });
  return (
    <form onSubmit={form.onSubmit(console.log)}>
      <TextInput
        className="m-5"
        mt="sm"
        placeholder="Email"
        {...form.getInputProps("email")}
      />
      <PasswordInput
        className="m-5"
        placeholder="Password"
        {...form.getInputProps("password")}
      />
      <LoginButton
        className="text-blue-400 bg-white hover:text-white hover:bg-blue-400"
        id="btn-login"
        label="Log in"
      />
      <h5 className="text-center text-blue-400 font-poppins">Or</h5>
      <RegisButton
        className="text-blue-400 bg-white hover:text-white hover:bg-blue-400"
        id="btn-login"
        label="Sign up"
        to="/signup"
      />
    </form>
  );
}

export default LoginInput;
