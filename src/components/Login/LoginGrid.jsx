import React from "react";
import { Grid } from "@mantine/core";
import LoginInput from "./LoginInput";
// import LoginButton from "./LoginButton";
// import RegisButton from "../Register/RegisButton";

function LoginGrid() {
  return (
    <Grid className="rounded-lg drop-shadow-lg">
      <Grid.Col span={6}>
        <h1 className="text-center font-bold text-blue-400">LOGIN</h1>
        <LoginInput />
      </Grid.Col>
      <Grid.Col
        span={6}
        className="bg-blue-400 text-white text-5xl text-center"
      >
        <h1 className="m-10 p-10 ">WELCOME TO</h1>
      </Grid.Col>
    </Grid>
  );
}
export default LoginGrid;
