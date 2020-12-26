import React from "react";
import { Route } from "react-router-dom";
import ArticleListView from "./components/ArticleListView";
import ArticleDetailView from "./components/ArticleDetailView";
import { Grid } from "@material-ui/core";
import Container from "@material-ui/core/Container";

export default function BaseRouter() {
  return (
    <Container maxWidth="lg">
      <Grid container direction="column">
        <Route exact path="/" component={ArticleListView} />
        <Route exact path="/:articleID" component={ArticleDetailView} />
      </Grid>
    </Container>
  );
}
