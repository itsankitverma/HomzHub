import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Background from "./icons/background.svg"
import { Button } from '@material-ui/core';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import "../../App.css"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        color: "white",
        position: "relative",
        left:"40px",
        top:"22px",
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
      display:"flex",
      justifyContent:"space-between",
      background: `url(#2F80ED)`
    },
  }),
);

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function CustomSeparator() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
         <div >
       
         <b style={{ fontSize:"22px",position: "relative", top:"-8px" }}>Property Visits</b>
        <Breadcrumbs separator="›" aria-label="breadcrumb" style={{  color: "white", position: "relative", top:"-8px" }}>
                <Link color="inherit" href="/" onClick={handleClick}>
                Home
                </Link>
                <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
                Property Visits
                </Link>       
        </Breadcrumbs>      
        </div>
  
        <div style={{ position:"relative", right:"70px", top:"-10px", cursor: "pointer",}}>
        <Button variant="outlined" style={{ color:"white" }}  ><KeyboardBackspaceIcon/>Back</Button>
        </div>
    </div>
  );
}
