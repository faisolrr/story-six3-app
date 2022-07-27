import React, { useState, useEffect } from "react";
import { HomeCard, HomeCard2 } from "../components/HomeCard";
import Header from "../components/Header";
import axios from "axios";

const HomePage = () => {
  const [userDatas, setUserDatas] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=ccfec1e4c0a0d66091556703ed6a6ee6&language=en-US&page=1`
      )
      .then((response) => {
        console.log(response);
        console.log(response.data.results);
        const { results } = response.data;
        console.log(results);
        if (results) {
          setUserDatas(results);
        }
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <Header />
      <HomeCard2 />
      <div className="grid gap-20 mx-5 my-5 md:mx-10 md:my-10 lg:mx-20 lg:my-20 ">
        {userDatas.map((userData) => (
          <HomeCard
            key={userData.id}
            user={userData.id}
            date={userData.vote_average}
            content={userData.overview}
            // picture={userData.picture}
            comment={userData.vote_count}
          />
        ))}
      </div>
    </>
  );
};

export default HomePage;
