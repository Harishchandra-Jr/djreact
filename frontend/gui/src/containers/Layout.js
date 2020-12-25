import React, { Children } from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import { Grid } from "@material-ui/core";

export default function Layout() {
  function handleClick(event) {
    // event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  return (
    <Grid item xs={12}>
      <Box>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/" onClick={handleClick}>
            Home
          </Link>
          <Link color="inherit" href="/" onClick={handleClick}>
            item{" "}
          </Link>
        </Breadcrumbs>
      </Box>
    </Grid>
  );
}
