import React from "react";

function LoginButton({ id, label, loading, onClick }) {
  return (
    <button
      id={id}
      className={`w-full bg-blue-400 hover:bg-white text-white hover:text-blue-400 font-bold my-5 py-2 rounded-full border-blue-400 border-solid border-2 ${
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
