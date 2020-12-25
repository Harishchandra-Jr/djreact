import React, { useState } from "react";
import Article from "../containers/Article";
import List from "@material-ui/core/List";
import axios from "axios";

export default function ArticleListView() {
  const [dataState, setDataState] = useState([]);

  function getApiData() {
    axios.get("http://127.0.0.1:8000/api/").then((res) => {
      setDataState(res.data);
    });
  }

  React.useEffect(() => {
    getApiData();
  }, []);
  console.log(dataState);
  return (
    <List>
      {dataState.map((value, index) => (
        <Article
          key={index}
          id={value.id}
          title={value.title}
          content={value.content}
          author={value.author}
        />
      ))}
    </List>
  );
}
