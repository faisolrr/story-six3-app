import React from "react";
import { useForm } from "@mantine/form";

import { TextInput, PasswordInput } from "@mantine/core";
// import Login from "../../pages/Login";
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
    // <div className="grid grid-col m-5 shadow-lg">
    <form onSubmit={form.onSubmit(console.log)}>
      <TextInput
        className="m-5"
        // mt="sm"
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
        //   loading={loading || disabled}
      />
      <h5 className="text-center text-blue-400">Or</h5>
      <RegisButton
        className="text-blue-400 bg-white hover:text-white hover:bg-blue-400"
        id="btn-login"
        label="Sign up"
        to="/signup"
      />
      {/* <Button type="submit" mt="sm">
          Log in
        </Button> */}
    </form>
    // </div>
  );
}
// function LoginInput({ id, type, placeholder, value, onChange, disabled }) {
//   return (
//     <input
//       id={id}
//       type={type}
//       placeholder={placeholder}
//       value={value}
//       onChange={onChange}
//       disabled={disabled}
//       defaultValue={value}
//       className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"
//     />
//   );
// }
export default LoginInput;
