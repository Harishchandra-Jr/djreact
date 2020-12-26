import React from "react";

import NavigationBar from "./containers/navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";
import { Grid } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Router>
        <Grid container spacing={1} style={{ background: "#cfd8dc" }}>
          <Grid item xs={12}>
            {" "}
            <NavigationBar />
          </Grid>
          <Grid item xs={12}>
            {" "}
            <BaseRouter />
          </Grid>
        </Grid>
      </Router>
    </div>
  );
}

export default App;
