import { Menu, Card, Image, Text, Group, Button } from "@mantine/core";
import { Trash } from "tabler-icons-react";

import React from "react";

function HomeCard2() {
  return (
    <Text
      color="dimmed"
      className="dark:bg-stone-800 grid text-xs md:text-md lg:text-lg justify-center hover:underline font-poppins shadow-lg shadow-black/40 p-5 mx-5 my-5 md:mx-10 md:my-20 lg:mx-20 lg:my-20"
    >
      <a href="//" className="dark:text-white">
        What do you think .... ?
      </a>
    </Text>
  );
}

function HomeCard(data) {
  return (
    <Card className="shadow-lg shadow-black/40 p-10 dark:bg-stone-800">
      <Card.Section>
        <Group position="apart">
          <Text className="text-xs md:text-md lg:text-lg font-roboto font-boldd dark:text-white">
            Username{data.user}
            <Text
              color="dimmed"
              className="text-xs md:text-md lg:text-lg ml-2 inline-block dark:text-white"
            >
              {data.date}h
            </Text>
          </Text>

          <Menu size="xs" className="dark:bg-stone-800">
            <Menu.Item className="font-poppins dark:text-white dark:bg-stone-800">
              Edit
            </Menu.Item>
            <Menu.Item
              color="red"
              icon={<Trash size={14} />}
              className="font-poppins dark:bg-stone-800"
            >
              Delete
            </Menu.Item>
          </Menu>
        </Group>

        <Text className="text-xs md:text-md lg:text-lg text-justify font-poppins dark:text-white">
          {data.content}
        </Text>

        <Image src={data.picture} className="mt-3" />
        <Text
          color="dimmed"
          className="text-xs md:text-md lg:text-lg hover:underline font-poppins"
        >
          <a className="dark:text-white" href="//">
            View {data.comment} all comments...
          </a>
        </Text>
      </Card.Section>
    </Card>
  );
}

export { HomeCard, HomeCard2 };
