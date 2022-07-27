import React from "react";
import Header from "../../components/Header";
import { SimpleGrid } from "@mantine/core";
import LoginInput from "../../components/Login/LoginInput";

function Login() {
  return (
    <>
      <Header />
      <div className="grid grid-row lg:grid-col mt-7 m-5 p-5 shadow-2xl rounded-2xl">
        <SimpleGrid
          breakpoints={[
            { minWidth: "sm", cols: 1 },
            { minWidth: "lg", cols: 2 },
          ]}
        >
          <div>
            <h1 className="text-center font-bold text-blue-400 space-x-4 text-2xl">
              <span className="space-x-2 font-montserrat text-bold">L</span>
              <span className="space-x-2 font-montserrat text-bold">O</span>
              <span className="space-x-2 font-montserrat text-bold">G</span>
              <span className="space-x-2 font-montserrat text-bold">I</span>
              <span className="space-x-2 font-montserrat text-bold">N</span>
            </h1>
            <LoginInput />
          </div>
          <div className="bg-blue-400 text-center text-white sm:text-3xl">
            <h1 className="m-10 p-10 font-montserrat italic ">WELCOME TO</h1>
            <h1 className="font-montserrat text-white text-lg lg:text-3xl">
              <span className="italic">STOR</span>
              <span className="font-extralight">Y</span>
              <span className="italic">SiX</span>
              <span className="font-extrabold">3</span>
            </h1>
          </div>
        </SimpleGrid>
      </div>
    </>
  );
}
export default Login;
