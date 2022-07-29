import React, { useState, useEffect } from "react";
import { HomeCard, HomeCard2 } from "../components/HomeCard";
import Header from "../components/Header";
import axios from "axios";

const HomePage = () => {
  const [postDatas, setPostDatas] = useState([]);
  // const [userDatas, setUserDatas] = useState([]);
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
        console.log(response);
        // console.log(response.data);
        const { data } = response;
        // console.log(data);
        if (data) {
          setPostDatas(data);
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
      <div className="p-1">
        <HomeCard2 />
        <div className="grid gap-4 md:gap-6 lg:gap-8 mx-5 my-5 md:my-6 lg:my-8 md:mx-32 lg:mx-44 ">
          {postDatas.map((postData) => (
            <HomeCard
              key={postData.id}
              user={postData.userId}
              date={postData.userId}
              content={postData.body}
              picture={postData.picture}
              comment={postData.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
