import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { chat } from "@/mock-file.json";
import { RenderMessage } from "./components/RenderMessage";
import { MessageInput } from "./components/MessageInput";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
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
        return RenderMessage({ msg, index });
      })}
      <MessageInput />
    </main>
  );
}
