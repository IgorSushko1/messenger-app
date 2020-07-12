import React from "react";
import { Avatar, Typography, Paper, Input } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { chat } from "@/mock-file.json";
import { AttachFile as AttachFileIcon } from "@material-ui/icons";
import RenderMessage from "./components/RenderMessage";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    wrapMessage: {
      display: "flex",
      justifyContent: "flex-start",
      width: "100%",
      marginTop: 10,
    },
    wrapMyMessage: {
      justifyContent: "flex-end",
    },
    message: {
      maxWidth: "70%",
      minWidth: "10%",
      margin: "0 10px",
      padding: 5,
    },
    clientMessage: {
      backgroundColor: "#dfecfb",
    },
    messageInputWrapper: {
      position: "sticky",
      left: "auto",
      right: 0,
      bottom: 0,
      width: `100%`,
      marginTop: 10,
    },
    messageInput: {
      paddingLeft: 30,
      paddingBottom: 3,
      padding: "5px 0 3px 30px",
    },
    addFile: {
      position: "absolute",
      top: 5,
      left: 3,
      cursor: "pointer",
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
  })
);

export function Chat() {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      {chat.map((msg, index) => {
        return RenderMessage({msg, index});
      })}

      <div className={classes.messageInputWrapper}>
        <AttachFileIcon className={classes.addFile} />
        <Paper className={classes.messageInput} elevation={6}>
          <Input fullWidth placeholder="Type your message…" />
        </Paper>
      </div>
    </main>
  );
}
