import React from "react";
import Register from "../../pages/auth/Register";

function RegisButton() {
  return (
    <button
      className={`w-11/12 lg:mx-5 mx-2 hover:bg-[#56BBF1] bg-white hover:text-white text-[#56BBF1] font-bold my-5 py-2 px-4 rounded-full border-[#56BBF1] border-solid border-2`}
      type="button"
      to={<Register />}
    >
      Sign up
    </button>
  );
}
export default RegisButton;
