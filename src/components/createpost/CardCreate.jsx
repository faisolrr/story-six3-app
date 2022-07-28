import React from "react";

import { Card, Text, Group } from "@mantine/core";
import { useState } from "react";

import InputPost from "./InputPost";

const CardCreate = (props) => {
  const [content, setContent] = useState("");
  console.log(content);
  const [picture, setPicture] = useState("");
  console.log(picture);

  const handleSubmit = () => {
    alert("ellow");
  };

  return (
    <Card className="shadow-lg shadow-black/40 p-10 pb-6 m-6 rounded-xl lg:mx-40 lg:max-w-screen-xl 2xl:mx-auto">
      <Card.Section>
        <Group position="apart">
          <div className="flex items-center">
            <Text className="font-roboto font-boldd -mt-2 -ml-2 text-lg md:text-xl md:ml-1 md:mt-0 lg:text-2xl">
              Udin
            </Text>
          </div>
        </Group>
      </Card.Section>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <InputPost
          onChange={(e) =>
            setContent(e.target.value) && setPicture(e.target.value)
          }
        />
        <button
          type="submit"
          className="font-roboto font-medium bg-[#56BBF1] rounded-2xl text-white w-full mt-8 py-2 md:py-4 md:text-xl"
        >
          Send
        </button>
      </form>
    </Card>
  );
};

export default CardCreate;
