import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar, fade, IconButton, Paper, makeStyles } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";


const useStyles = makeStyles((theme : any) => ({
  hamburger: {
    display: "none"
  },
  root: {
    padding: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      backgroundColor: theme.palette.secondary.main
    },
    [theme.breakpoints.up("md")]: {
      backgroundColor: theme.palette.primary.main
    },
    [theme.breakpoints.up("lg")]: {
      backgroundColor: "green"
    }
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    // display: "none",
    position:"relative",
    left:"20px",
    [theme.breakpoints.up("sm")]: {
      // display: "block"
    }
  },
  search: {
    position: "relative",
    left: 40,
    width: 300,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.25),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(1),
    marginLeft: 2,

    border: "1px solid black"
  },
  searchIcon: {
    padding: theme.spacing(0, 21),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    left: "100px"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(0)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch"
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    // flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    textAlign: "center"
    // [theme.breakpoints.up("md")]: {
    //   display: "none"
    // }
  },
  end: {
    display: "flex",
    justifyContent: "space-around",
    width: "30%"
  },
  hum_typo: {
    fontSize: "1rem",
    margin: "10px",
    textTransform: "uppercase",
    borderBottom: "0.5px solid #979393",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer"
  },
  "@media (max-width: 852px)": {
    title: {
      display: "flex",
      fontSize: 10
    },
    hum_div: {
      display: "block"
    },
    end: {
      display: "none"
    },
    hamburger: {
      display: "block"
    },
   
  }
}));

export interface NavData {
  image?: string;
  alt?: string;
  avatarAlt?: string;
  avatarSrc?: string;
}

export default function PrimarySearchAppBar({
  image,
  alt,
  avatarAlt,
  avatarSrc
}: NavData) {
  const classes = useStyles();

  const [Visible, setVisible] = useState(false);

  return (
    <div className={classes.grow}>
      <AppBar
        position="static"
        className={classes.root}
        style={{ background: "#FFF", color: "#000", boxShadow: "none" }}
      >
        <Toolbar>
          <Typography className={classes.title} noWrap>
            <img src={image} alt={alt} />
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>

          <div className={classes.grow} />

          <div className={classes.hamburger}>
            <IconButton onClick={() => setVisible(!Visible)}>
              <MenuIcon />
            </IconButton>
          </div>
          <div className={classes.end}>
            <div style={{ position: "relative", top: "10px",  cursor: "pointer" }}>
              <p>Help & Support</p>
            </div>
            <div style={{ position: "relative", top: "10px",  cursor: "pointer"  }}>
              <p>Refer & Earn</p>
            </div>
            <div>
              <Avatar alt={avatarAlt} src={avatarSrc} />
            </div>
          </div>
        </Toolbar>
        {Visible === true ? (
          <div>
            <Paper elevation={1}>
              <Typography className={classes.hum_typo}>
                Help & Support
              </Typography>
              <Typography className={classes.hum_typo}>Refer & Earn</Typography>
              <Typography className={classes.hum_typo}>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                  inputProps={{ "aria-label": "search" }}
                  style={{ border: "1px solid black" }}
                />
              </Typography>
            </Paper>
          </div>
        ) : (
          <></>
        )}
      </AppBar>
    </div>
  );
}
