import React, { useState, useEffect } from "react";
import axios from "axios";

import ProfilesCard from "../components/ProfilesCard";
import Header from "../components/Header";
import { HomeCard2 } from "../components/HomeCard";

const ProfilesPage = () => {
  const [userDatas, setUserDatas] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // setLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      // .get(`https://myminefield.site/posts`)
      .then((response) => {
        console.log(response);
        // console.log(response.data);
        // console.log(response.data[1]);
        const data = response.data[1];
        // console.log(data);
        if (data) {
          setUserDatas(data);
        }
      })
      .catch((error) => {
        alert(error.toString());
      });
    //   .finally(() => setLoading(false));
  };
  return (
    <>
      <Header />
      <HomeCard2 />
      <ProfilesCard
        key={userDatas.id}
        user={userDatas.username}
        email={userDatas.email}
        // password={userDatas.phone}
        // date={userDatas.userId}
        // content={userDatas.body}
        // picture={userDatas.picture}
        // comment={userDatas.id}
      />
    </>
  );
};

export default ProfilesPage;
