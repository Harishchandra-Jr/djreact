import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography, Button, Grid } from "@material-ui/core";

import { navBarStyles } from "../../assets/jss/navbarStyle";

export default function Navbar() {
  const classes = navBarStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Grid container spacing={1}>
            <Grid item>
              <Typography variant="h6" noWrap style={{ flexGrow: 1 }}>
                Kartikeya
              </Typography>
            </Grid>
            <Grid item>
              <Button variant="contained" color="secondary" href="/">
                Blogs
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
