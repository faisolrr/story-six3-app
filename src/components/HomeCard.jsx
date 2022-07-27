import { Menu, Card, Image, Text, Group } from "@mantine/core";
import { Trash } from "tabler-icons-react";

function HomeCard(data) {
  return (
    <Card className="shadow-lg shadow-black p-10">
      <Card.Section>
        <Group position="apart">
          <Text weight={500} size="lg">
            {data.user}
            <Text color="dimmed" className="ml-2 text-sm inline-block ">
              {data.date}h
            </Text>
          </Text>

          <Menu size="xs">
            <Menu.Item className="hover:bg-stone-100">Edit</Menu.Item>
            <Menu.Item
              color="red"
              icon={<Trash size={14} />}
              className="hover:bg-stone-100"
            >
              Delete
            </Menu.Item>
          </Menu>
        </Group>

        <Text size="sm" className="text-justify">
          {data.content}
        </Text>

        <Image src={data.picture} className="mt-3" />
      </Card.Section>
      <Text color="dimmed" className="hover:underline">
        <a className="" href="//">
          View {data.comment} all comments...
        </a>
      </Text>
    </Card>
  );
}

export default HomeCard;
