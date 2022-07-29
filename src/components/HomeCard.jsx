import { Menu, Card, Text, Group } from "@mantine/core";
import { IoTrashOutline } from "react-icons/io5";
import { AiOutlineEdit } from "react-icons/ai";
import { useState } from "react";

function HomeCard2() {
  const [isLogin] = useState(true);
  return (
    // {isLogin?"login":"not login"}
    <>
      {isLogin ? (
        <Text className="text-[#6F6F6F] opacity-[0.7] rounded-xl grid text-xs md:text-md lg:text-lg justify-center hover:underline font-poppins shadow-lg shadow-black/40 p-2 mx-5 my-5 md:mt-6 md:mb-0 lg:mt-10 lg:mb-0 md:mx-32 lg:mx-44">
          <a href="//">What do you think .... ?</a>
        </Text>
      ) : (
        <div className="py-2 md:py-0"></div>
      )}
    </>
  );
}

const HomeCard = (props) => {
  const [isLogin] = useState(true);
  return (
    <>
      {isLogin ? (
        <Card className="rounded-xl shadow-lg shadow-black/40 p-7">
          <Card.Section>
            <Group position="apart">
              <Text className="text-xs md:text-md lg:text-lg font-roboto font-boldd ">
                Username{props.user}
                <Text className="text-[#6F6F6F] opacity-[0.7] text-xs md:text-md lg:text-lg ml-2 inline-block">
                  {props.date}h
                </Text>
              </Text>

              <Menu size="xs" className="">
                <Menu.Item
                  icon={<AiOutlineEdit size={14} />}
                  className="font-poppins"
                >
                  Edit
                </Menu.Item>
                <Menu.Item
                  color="red"
                  icon={<IoTrashOutline size={14} />}
                  className="font-poppins"
                >
                  Delete
                </Menu.Item>
              </Menu>
            </Group>

            <Text className=" pr-2 pl-4 text-xs md:text-md lg:text-lg text-justify font-poppins ">
              {props.content}
            </Text>
            <div className="flex justify-center">
              <img
                src={
                  props.picture
                    ? `https://image.tmdb.org/t/p/w500${props.picture}`
                    : "https://via.placeholder.com/200x300?text=No+Image"
                }
                alt={props.user}
                className=" pr-2 pl-4 mt-3"
              />
            </div>
            <Text className="text-[#6F6F6F] opacity-[0.7] pr-2 pl-4 text-xs md:text-md lg:text-lg hover:underline font-poppins">
              <a href="//">View {props.comment} all comments...</a>
            </Text>
          </Card.Section>
        </Card>
      ) : (
        <Card className="rounded-xl shadow-lg shadow-black/40 p-7">
          <Card.Section>
            <Group position="apart">
              <Text className="text-xs md:text-md lg:text-lg font-roboto font-boldd ">
                Username{props.user}
                <Text className="text-[#6F6F6F] opacity-[0.7] text-xs md:text-md lg:text-lg ml-2 inline-block">
                  {props.date}h
                </Text>
              </Text>
            </Group>

            <Text className=" pr-2 pl-4 text-xs md:text-md lg:text-lg text-justify font-poppins ">
              {props.content}
            </Text>
            <div className="flex justify-center">
              <img
                src={
                  props.picture
                    ? `https://image.tmdb.org/t/p/w500${props.picture}`
                    : "https://via.placeholder.com/200x300?text=No+Image"
                }
                alt={props.user}
                className=" pr-2 pl-4 mt-3"
              />
            </div>
            <Text className="text-[#6F6F6F] opacity-[0.7] pr-2 pl-4 text-xs md:text-md lg:text-lg hover:underline font-poppins">
              <a href="//">View {props.comment} all comments...</a>
            </Text>
          </Card.Section>
        </Card>
      )}
    </>
  );
};

export { HomeCard, HomeCard2 };
