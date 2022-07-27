import HomeCard from "../components/HomeCard";

const HomePage = () => {
  const userDatas = [
    {
      id: 1,
      username: "prior1",
      date: 11,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Nunc sed velit dignissim sodales ut eu sem integer",
      picture:
        "https://images.unsplash.com/photo-1579263477001-7a703f1974e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      comment: 111,
    },
    {
      id: 2,
      username: "prior2",
      date: 12,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Nunc sed velit dignissim sodales ut eu sem integer",
      picture:
        "https://images.unsplash.com/photo-1579263477001-7a703f1974e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      comment: 222,
    },
    {
      id: 3,
      username: "prior3",
      date: 13,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Nunc sed velit dignissim sodales ut eu sem integer",
      picture:
        "https://images.unsplash.com/photo-1579263477001-7a703f1974e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      comment: 333,
    },
  ];

  return (
    <>
      <div>Header</div>
      <div className="grid gap-20 mx-5 my-5 md:mx-10 md:my-10 lg:mx-20 lg:my-20 ">
        {userDatas.map((userData) => (
          <HomeCard
            key={userData.id}
            user={userData.username}
            date={userData.date}
            content={userData.content}
            picture={userData.picture}
            comment={userData.comment}
          />
        ))}
      </div>
    </>
  );
};

export default HomePage;
