import React, { useState, useEffect } from "react";
import { HomeCard, HomeCard2 } from "../components/HomeCard";
import Header from "../components/Header";
import axios from "axios";

const HomePage = () => {
  const [userDatas, setUserDatas] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // setLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      // .get(`https://myminefield.site/posts`)
      .then((response) => {
        // console.log(response);
        // console.log(response.data);
        const { data } = response;
        console.log(data);
        if (data) {
          setUserDatas(data);
        }
      })
      .catch((error) => {
        alert(error.toString());
      });
    // .finally(() => setLoading(false));
  };

  return (
    <>
      <Header />
      <div className="dark:bg-black p-1">
        <HomeCard2 />
        <div className="grid gap-4 md:gap-20 mx-5 my-5 md:mx-10 md:my-10 lg:mx-20 lg:my-20">
          {userDatas.map((userData) => (
            <HomeCard
              key={userData.id}
              user={userData.id}
              date={userData.userId}
              content={userData.body}
              // picture={userData.picture}
              comment={userData.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
