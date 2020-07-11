import React from "react";
import { AddDropDownMenu } from "@/components/AddDropDownMenu";
import {
  AppBar,
  Avatar,
  Drawer,
  Hidden,
  IconButton,
  CssBaseline,
  TextField,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import { Menu as MenuIcon } from "@material-ui/icons";
import { rooms } from "./mock-file.json";
import { Chat } from "./components/Chat/Chat";

const drawerWidth = 280;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      width: "100%",
      height: "100%",
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    searchRoom: {
      width: 260,
      marginTop: 5,
      left: "calc(50% - 130px)",
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    rooms: {
      height: "calc(100% - 52px)",
      overflowY: "auto",
    },
  })
);

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export function App(props: Props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      {
        <TextField
          id="searchRoom"
          className={classes.searchRoom}
          label="Search chat room"
          margin="normal"
          InputProps={{ type: "search" }}
        />
      }
      <div className={classes.toolbar}>
        <List className={classes.rooms}>
          {rooms.map((room, index) => (
            <ListItem key={index} button>
              <Avatar>{room.title && room.title[0]}</Avatar>
              <ListItemText primary={room.title} style={{ paddingLeft: 10 }} />
            </ListItem>
          ))}
        </List>
      </div>
      <AddDropDownMenu />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Free Chat
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <Chat />
    </div>
  );
}
