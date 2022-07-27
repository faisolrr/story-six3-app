import React from "react";
import Header from "../../components/Header";
// import { useEffect, useState } from "react";
// import { useNavigate, Link } from "react-router-dom";

import LoginGrid from "../../components/Login/LoginGrid";

function Login() {
  return (
    <>
      <Header />
      <div className="grid grid-row lg:grid-col m-5 p-5 shadow-2xl rounded-2xl">
        <div className="m-5 p-5 rounded-sm drop-shadow-lg">
          <LoginGrid />
        </div>
      </div>
    </>
  );
}
export default Login;
