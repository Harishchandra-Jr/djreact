import React from "react";
import BreadcrumbComp from "./containers/Layout";
import NavigationBar from "./containers/navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";
import { Grid } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Router>
        <Grid container spacing={2}>
          <NavigationBar />
          <BreadcrumbComp />
          <BaseRouter />
        </Grid>
      </Router>
    </div>
  );
}

export default App;
