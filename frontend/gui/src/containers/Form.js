/* eslint-disable default-case */
import React from "react";
import TextField from "@material-ui/core/TextField";
import { Grid, Paper, Button, Typography } from "@material-ui/core";
import axios from "axios";
export default function CustomForm(props) {
  const handleSubmit = (e, requestType, articleID) => {
    // e.preventDefault();
    const title = e.target.elements.title.value;
    const content = e.target.elements.content.value;
    const author = e.target.elements.author.value;

    switch (requestType) {
      case "post":
        return axios
          .post("http://127.0.0.1:8000/api/", {
            title: title,
            content: content,
            author: author,
          })
          .then((res) => console.log(res))
          .catch((error) => console.err(error));

      case "put":
        return axios
          .put(`http://127.0.0.1:8000/api/${articleID}/`, {
            title: title,
            content: content,
            author: author,
          })
          .then((res) => console.log(res))
          .catch((error) => console.err(error));
    }
  };
  return (
    <Paper elevation={2}>
      <form
        onSubmit={(e) => handleSubmit(e, props.requestType, props.articleID)}
      >
        <Grid
          container
          spacing={2}
          direction="column"
          style={{ padding: "20px" }}
        >
          <Grid item xs={12}>
            <Typography variant="h6" component="h6">
              {props.formLable}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="filled-required"
              label="Author"
              variant="outlined"
              fullWidth
              name="author"
            />
          </Grid>
          <Grid item>
            <TextField
              id="filled-required"
              label="Title"
              variant="outlined"
              name="title"
              fullWidth
            />
          </Grid>
          <Grid item>
            <TextField
              id="filled-required"
              label="Content"
              variant="outlined"
              fullWidth
              multiline
              name="content"
              rows={3}
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              size="large"
            >
              {props.btnText}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}
