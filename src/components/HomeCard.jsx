import { Menu, Card, Image, Text, Group } from "@mantine/core";
import { Trash } from "tabler-icons-react";

import React from "react";

function HomeCard2() {
  return (
    <Text
      color="dimmed"
      className="grid justify-center hover:underline text-xl font-poppins shadow-lg shadow-black p-5 mx-5 my-5 md:mx-10 md:my-10 lg:mx-20 lg:my-20"
    >
      <a href="//">What do you think .... ?</a>
    </Text>
  );
}

export default HomeCard;

function HomeCard(data) {
  return (
    <Card className="shadow-lg shadow-black p-10">
      <Card.Section>
        <Group position="apart">
          <Text className="font-roboto font-boldd text-base">
            {data.user}
            <Text color="dimmed" className="ml-2 text-base inline-block ">
              {data.date}h
            </Text>
          </Text>

          <Menu size="xs">
            <Menu.Item className="hover:bg-stone-100 font-poppins">
              Edit
            </Menu.Item>
            <Menu.Item
              color="red"
              icon={<Trash size={14} />}
              className="hover:bg-stone-100 font-poppins"
            >
              Delete
            </Menu.Item>
          </Menu>
        </Group>

        <Text className="text-justify font-poppins text-base">
          {data.content}
        </Text>

        <Image src={data.picture} className="mt-3" />
      </Card.Section>
      <Text color="dimmed" className="hover:underline text-base font-poppins">
        <a className="" href="//">
          View {data.comment} all comments...
        </a>
      </Text>
    </Card>
  );
}

export { HomeCard, HomeCard2 };
