import React from "react";
import axios from "axios";

import { Card, Text, Group } from "@mantine/core";
import { useState, useEffect } from "react";

import InputPost from "./InputPost";

const CardCreate = (props) => {
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  // get date posting
  const fetchData = async () => {
    setLoading(true);
    let config = {
      method: "get",
      url: "https://myminefield.site/posts",
    };

    await axios(config)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  };

  // add posting
  const handleSubmit = async (e) => {
    e.preventDefault();
    var config = {
      method: "post",
      url: "https://myminefield.site/posts",
      data: {
        content,
        image,
      },
    };

    await axios(config)
      .then((response) => {
        console.log(response);
        alert("sukses menambah todo");
      })
      .catch(function (err) {
        console.log(err);
      })
      .finally(() => fetchData());
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
      <form action="">
        <InputPost
          onChange={(e) =>
            setContent(e.target.value) && setImage(e.target.value)
          }
        />
        <button
          onClick={(e) => handleSubmit(e)}
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
