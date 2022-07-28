import React from "react";

function LoginButton({ id, label, loading, onClick }) {
  return (
    <button
      id={id}
      className={`w-11/12 lg:mx-5 mx-2 bg-[#56BBF1] hover:bg-white text-white hover:text-[#56BBF1] font-bold my-5 py-2 rounded-full border-[#56BBF1] border-solid border-2 ${
        loading && "bg-gray-500 cursor-not-allowed"
      }`}
      onClick={onClick}
      disabled={loading}
    >
      {label}
    </button>
  );
}
export default LoginButton;
