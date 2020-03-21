import React from "react";

import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Fab from "@material-ui/core/Fab";
import MenuIcon from "@material-ui/icons/Menu";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";

import { withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  appBar: {
    top: "auto",
    bottom: 0
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto",
    backgroundColor: "#F7DC00"
  }
}));

function MenuBar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div>
        <CssBaseline />
        <AppBar
          position="fixed"
          color="primary"
          className={classes.appBar}
          classes={{ root: classes.root }}
        >
          <Toolbar>
            <Link to="/new-donation">
              <Fab
                color="secondary"
                aria-label="add"
                className={classes.fabButton}
              >
                <AddIcon />
              </Fab>
            </Link>

            <div className="menu">
            <div className="iconMenu">
              <Link to="/dashboard" className="buttons">
                <img src="icon_dash.svg" alt="to dashboard" />{" "}
              </Link>
            </div>
            <div className="iconMenu">
              <Link to="/dashboard" className={classes.buttons}>
                <img src="icon_historic.svg" alt="to historic" />{" "}
              </Link>
            </div>
            <div className="iconMenu">
              <Link to="/dashboard" className={classes.buttons}>
                <img src="icon_profil.svg" alt="to profil" />{" "}
              </Link>
            </div>
            <div className="iconMenu">
              <Link to="/dashboard" className={classes.buttons}>
                <img src="icon_menu.svg" alt="to menu" />{" "}
              </Link>
            </div>
          </div>
          </Toolbar>
        </AppBar>
      </div>
    </React.Fragment>
  );
}

export default MenuBar;
