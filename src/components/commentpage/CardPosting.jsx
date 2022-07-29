import { Menu, Card, Image, Text, Group } from "@mantine/core";
import { FaTrashAlt } from "react-icons/fa";

import CardComment from "./CardComment";

import React from "react";
import AddComment from "./AddComment";

const HomeCard = (props) => {
  return (
    <Card className="shadow-lg shadow-black/40 p-10 m-6 rounded-xl lg:mx-20 lg:max-w-screen-xl 2xl:mx-auto">
      <Card.Section>
        <Group position="apart">
          <div className="flex items-center">
            <Text className="font-roboto font-boldd text-lg md:text-xl lg:text-2xl">
              {props.user}
            </Text>
            <Text color="dimmed" className="ml-2 text-base lg:lg">
              {props.date}h
            </Text>
          </div>

          <Menu size="xs">
            <Menu.Item className="hover:bg-stone-100 font-poppins">
              Edit
            </Menu.Item>
            <Menu.Item
              color="red"
              icon={<FaTrashAlt size={14} />}
              className="hover:bg-stone-100 font-poppins"
            >
              Delete
            </Menu.Item>
          </Menu>
        </Group>

        <Text className="text-left font-poppins text-base mt-5 md:text-lg lg:text-xl">
          {props.content}
        </Text>

        <Image src={props.picture} className="mt-3" />
      </Card.Section>

      <Text color="dimmed" className="text-base font-poppins -ml-4 md:text-lg">
        <p>123 all comments...</p>
      </Text>
      <CardComment />
      <CardComment />
      <AddComment />
    </Card>
  );
};

export default HomeCard;
