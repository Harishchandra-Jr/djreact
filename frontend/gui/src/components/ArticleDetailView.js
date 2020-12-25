import React, { useState } from "react";
import Article from "../containers/Article";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";
import axios from "axios";

export default function ArticleDetailView(props) {
  const [dataState, setDataState] = useState({});

  function getApiData() {
    const articleID = props.match.params.articleID;
    axios.get(`http://127.0.0.1:8000/api/${articleID}`).then((res) => {
      setDataState(res.data);
    });
  }

  React.useEffect(() => {
    getApiData();
  }, []);
  console.log(dataState);
  return (
    <Grid item xs={12} md={12} spacing={2}>
      <Card fullwidth>
        <CardContent>
          <Typography color="textSecondary" variant="h5" component="h2">
            {dataState.title}
          </Typography>
          <Typography variant="body2" component="p">
            {dataState.content}
          </Typography>
          <Typography component="h2" color="textSecondary">
            {" "}
            Author: {dataState.author}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
