import React from "react";

import { useState } from "react";

import { Card } from "@mantine/core";

const InputPost = (props) => {
  const [selectImage, setSelectImage] = useState(undefined);
  const [inputImge, setInputImage] = useState(false);

  // add posting

  // input image
  const handleImg = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectImage(e.target.files[0]);
      setInputImage(true);
    }
  };

  // cancel input image
  const removeImage = () => {
    setInputImage(false);
  };

  return (
    <div>
      {!inputImge ? (
        <Card
          onChange={props.onChange}
          className="shadow-lg shadow-black/40 p-10 -mx-6 mt-2 rounded-xl md:mx-10 lg:mt-4 lg:mx-5"
        >
          <Card.Section>
            <input
              className="text-left ring-white font-poppins text-base -mt-7 -ml-2 md:text-lg lg:text-xl outline-transparent"
              placeholder="
          What do you think .... ?"
              required
            />
            <div className="">
              <label className="flex flex-col h-32 w-full mt-3 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300 md:h-48 lg:h-56">
                <div className="flex flex-col items-center justify-center pt-7">
                  <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                    Drag Image
                  </p>
                </div>
                <input onChange={handleImg} type="file" className="opacity-0" />
              </label>
            </div>
          </Card.Section>
        </Card>
      ) : (
        <Card
          onChange={props.onChange}
          className="shadow-lg shadow-black/40 p-10 -mx-6 mt-2 rounded-xl md:mx-10 md:pb-32"
        >
          <Card.Section>
            <input
              className="text-left ring-white font-poppins text-base -mt-7  md:text-lg lg:text-xl outline-transparent"
              placeholder="
          What do you think .... ?"
              required
            />
            <div className="flex items-center justify-center pb-10 mt-2 md:mt-8">
              <label className="flex flex-col h-32">
                <div className="flex flex-col items-center justify-center ">
                  <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                    <img
                      className="h-32 md:h-48 lg:h-56"
                      src={URL.createObjectURL(selectImage)}
                    />
                  </p>
                </div>
                <button
                  onClick={() => removeImage()}
                  className="bg-red-600 mt-2 mx-8 rounded-lg py-1 text-white"
                >
                  Remove
                </button>
              </label>
            </div>
          </Card.Section>
        </Card>
      )}
    </div>
  );
};

export default InputPost;
