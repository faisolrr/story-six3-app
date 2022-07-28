import React from "react";

import { Input } from "@mantine/core";

const AddComment = () => {
  return (
    <div className="relative">
      {/* <Input
        className="-mx-7 mt-3 shadow-lg shadow-black/25 rounded-full"
        placeholder="Add comment"
        radius="lg"
      /> */}
      <input
        type="text"
        className="py-2 pl-2 w-full -mx-7 border-2 rounded-l-lg round font-poppins shadow-lg shadow-black/25"
        placeholder="Add commnent"
      />
      <button
        onClick={(e) => e}
        className="rounded-r-xl bg-[#56BBF1] py-[0.7rem] px-5 absolute -top-[0.08rem] -right-8 shadow-lg shadow-black/25"
      >
        Add
      </button>
    </div>
  );
};

export default AddComment;
