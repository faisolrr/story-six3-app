import React from "react";
import Header from "../../components/Header";
import { useForm } from "@mantine/form";
import { SimpleGrid, TextInput, PasswordInput } from "@mantine/core";
import LoginButton from "../../components/Login/LoginButton";

function Register() {
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
    <>
      <Header />
      <SimpleGrid
        className="lg:grid-col lg:mt-11 m-5 shadow-2xl rounded-2xl"
        breakpoints={[
          { minWidth: "sm", cols: 1 },
          { minWidth: "lg", cols: 2 },
        ]}
      >
        <div className="bg-[#56BBF1] text-white text-center lg:rounded-lg rounded-t-lg ">
          <h1 className="my-32 font-montserrat italic text-lg sm:text-3xl">
            WELCOME TO
            <div className="mt-11 sm:py-2">
              <h1 className="font-montserrat text-white text-lg lg:text-3xl ">
                <span className="italic">STOR</span>
                <span className="font-extrabold">Y</span>
                <span className="italic">SiX</span>
                <span className="font-extrabold">3</span>
              </h1>
            </div>
          </h1>
        </div>
        <div className="my-7 sm:py-2">
          <h1 className="text-center font-bold text-[#56BBF1] space-x-4 text-2xl">
            Creat Account
          </h1>
          <form onSubmit={form.onSubmit(console.log)}>
            <div className="px-5 sm:px-3">
              <TextInput
                className="m-5"
                mt="sm"
                placeholder="Username"
                {...form.getInputProps("username")}
              />
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
              <PasswordInput
                className="m-5"
                placeholder="Re-Password"
                {...form.getInputProps("password")}
              />
              <LoginButton
                className="text-[#56BBF1] bg-white hover:text-white hover:bg-[#56BBF1]"
                id="btn-login"
                label="Sign up"
              />
            </div>
          </form>
        </div>
      </SimpleGrid>
    </>
  );
}
export default Register;
