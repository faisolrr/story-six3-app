import React from "react";

// import { useEffect, useState } from "react";
// import { useNavigate, Link } from "react-router-dom";

import LoginGrid from "../components/Login/LoginGrid";

function Login() {
  return (
    <div className="grid grid-col m-5 p-5 shadow-lg">
      <div className="m-5 p-5 rounded-sm drop-shadow-lg">
        <LoginGrid />
      </div>
    </div>
  );
}
export default Login;
