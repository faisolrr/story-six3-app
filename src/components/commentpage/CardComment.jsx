import React from "react";

import { FaTrashAlt } from "react-icons/fa";
import { Menu, Card, Text, Group } from "@mantine/core";

const CardComment = () => {
  return (
    <Card className="shadow-lg my-2 shadow-black/25 p-8 pb-4 -mx-7 rounded-xl">
      <Card.Section>
        <Group position="apart">
          <Text className="font-roboto font-boldd text-base md:text-xl">
            udin
            <Text color="dimmed" className="ml-2 text-base inline-block ">
              2h
            </Text>
          </Text>

          <Menu size="xs">
            <Menu.Item
              color="red"
              icon={<FaTrashAlt size={14} />}
              className="hover:bg-stone-100 font-poppins"
            >
              Delete
            </Menu.Item>
          </Menu>
        </Group>
        <Text className="text-left font-poppins text-base ml-6 md:text-lg">
          wah keren sekali
        </Text>
      </Card.Section>
      <Text
        color="dimmed"
        className="hover:underline text-base font-poppins"
      ></Text>
    </Card>
  );
};

export default CardComment;
