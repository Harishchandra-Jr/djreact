import React from "react";

import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

export default function Article(props) {
  return (
    <>
      <ListItem alignItems="flex-start" key={props.index}>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" />
        </ListItemAvatar>
        <ListItemText
          primary={<a href={`/${props.id}`}>{props.title}</a>}
          secondary={
            <React.Fragment>
              {props.content}
              Author:{props.author}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
}
