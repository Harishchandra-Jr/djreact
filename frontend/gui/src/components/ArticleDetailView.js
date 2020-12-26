import React, { useState, useCallback } from "react";

import { Card, CardContent, Typography, Grid, Button } from "@material-ui/core";
import axios from "axios";
import CustomForm from "../containers/Form";

export default function ArticleDetailView(props) {
  const [dataState, setDataState] = useState({});

  const getApiData = useCallback(() => {
    const articleID = props.match.params.articleID;
    axios.get(`http://127.0.0.1:8000/api/${articleID}`).then((res) => {
      setDataState(res.data);
    });
  }, [props]);

  React.useEffect(() => {
    getApiData();
  }, [getApiData]);

  const handleDelete = (event) => {
    const articleID = props.match.params.articleID;
    axios.delete(`http://127.0.0.1:8000/api/${articleID}`);
    getApiData();
    props.history.push("/");
  };

  console.log(dataState);
  return (
    <Grid item xs={12} md={12} spacing={2}>
      <Grid container spacing={2}>
        {" "}
        <Grid item>
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
        </Grid>{" "}
        <Grid item xs={12}>
          <CustomForm
            requestType="put"
            articleID={props.match.params.articleID}
            btnText="Update"
            formLable="Update Article"
          />
        </Grid>{" "}
        <Grid item xs={6}>
          <Button onClick={handleDelete} color="primary" variant="contained">
            Delete
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
