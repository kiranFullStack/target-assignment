import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import logo from "../assets/logo.png"
import github from "../assets/github.svg"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))

export default function MenuAppBar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            {/* <MenuIcon /> */}
            <img style={{ height: "30px" }} src={logo} alt="" />{" "}
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Target CRUD Assignment by Kiran
          </Typography>
          <a
            href="https://github.com/kiranFullStack/target-assignment"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              style={{ height: "30px", cursor: "pointer" }}
              src={github}
              alt=""
            />
          </a>
        </Toolbar>
      </AppBar>
    </div>
  )
}
