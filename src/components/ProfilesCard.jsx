import { Divider, Card, Text, Group } from "@mantine/core";

function ProfilesCard() {
  return (
    <Card className="rounded-xl shadow-lg shadow-black/40 px-7 py-8 mx-5 my-5 md:my-5 lg:my-5 md:mx-32 lg:mx-44">
      <Card.Section>
        <Group position="apart">
          <Group>
            <Text className="grid justify-self-center font-poppins font-bold text-xs md:text-md lg:text-lg ">
              <p>Username</p>
              <p>Email</p>
              <p>Password</p>
            </Text>
            <Divider className="opacity-0" orientation="vertical" />
            <Text className="font-poppins ml-2 text-xs md:text-md lg:text-lg">
              <p>: Andi</p>
              <p>: andi@gmail.com</p>
              <p>: ......</p>
            </Text>
          </Group>
          <button className="bg-[#56BBF1] rounded-xl py-2 px-4">
            <p className="font-poppins text-white text-xs md:text-md lg:text-lg">
              Edit profiles
            </p>
          </button>
        </Group>
      </Card.Section>
    </Card>
  );
}

export default ProfilesCard;
