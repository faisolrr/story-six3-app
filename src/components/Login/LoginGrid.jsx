import React from "react";
import { Grid } from "@mantine/core";
import LoginInput from "./LoginInput";
// import LoginButton from "./LoginButton";
// import RegisButton from "../Register/RegisButton";

function LoginGrid() {
  return (
    <Grid className="rounded-lg drop-shadow-lg">
      <Grid.Col span={6}>
        <h1 className="text-center font-bold text-blue-400 space-x-4 text-2xl">
          <span className="space-x-2 font-montserrat text-bold">L</span>
          <span className="space-x-2 font-montserrat text-bold">O</span>
          <span className="space-x-2 font-montserrat text-bold">G</span>
          <span className="space-x-2 font-montserrat text-bold">I</span>
          <span className="space-x-2 font-montserrat text-bold">N</span>
        </h1>
        <LoginInput />
      </Grid.Col>
      <Grid.Col
        span={6}
        className="bg-blue-400 text-white text-5xl text-center"
      >
        <h1 className="m-10 p-10 font-montserrat italic ">WELCOME TO</h1>
        <h1 className="font-montserrat text-white text-lg lg:text-3xl">
          <span className="italic">STOR</span>
          <span className="font-extralight">Y</span>
          <span className="italic">SiX</span>
          <span className="font-extrabold">3</span>
        </h1>
      </Grid.Col>
    </Grid>
  );
}
export default LoginGrid;
