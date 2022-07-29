import React from "react";

import { useState, useEffect } from "react";
import axios from "axios";

import HomeCard from "../components/commentpage/CardPosting";
import Header from "../components/Header";

const CommentPage = () => {
  const [posting, setPosting] = useState({
    id: 1,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id purus pellentesque, faucibus magna sed, accumsan nisi. ",
    createdat: "0001-01-01T00:00:00Z",
    user: [
      {
        id_user: 1,
        user: "alex",
      },
    ],
  });
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   setLoading(true);
  //   axios
  //     .get(`https://myminefield.site/posts?idpost=1`)
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       alert(error.toString());
  //     })
  //     .finally(() => setLoading(false));
  // };

  return (
    <div>
      <Header />
      <HomeCard
        content={posting.content}
        user={posting.user.map((user) => user.user)}
        date={2}
      />
    </div>
  );
};

export default CommentPage;
