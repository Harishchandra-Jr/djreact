import React, { useState } from "react";
import Article from "../containers/Article";
import { Paper, List, Grid } from "@material-ui/core";
import axios from "axios";
import CustomForm from "../containers/Form";
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
    <Grid container spacing={2}>
      <Grid item>
        <Paper elevation={1}>
          <List>
            {dataState.map((value, index) => (
              <Article
                key={index}
                index={index}
                id={value.id}
                title={value.title}
                content={value.content}
                author={value.author}
              />
            ))}
          </List>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <CustomForm
          requestType="post"
          articleID={null}
          btnText="Create"
          formLable="Create New Blog"
        />
      </Grid>
    </Grid>
  );
}
