import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { Avatar } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import InsertInvitationIcon from '@material-ui/icons/InsertInvitation';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import "../../../App.css"

const useStyles = makeStyles({
  root: {
    marginTop:20,
    maxWidth: 345,
    width: 311,
    height: 280,
   
  },
  alignHeader: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    textAlign: "center",
  },
  avatarHeader: {
    display: "flex",
    justifyContent: "flex-start",    
    alignItems: "center",
    },
  nameHeader: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "center"
    },
    nameAlign:{
        position: "relative", 
        left:"10px" 
    },
  rightHeader: { 
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    position: "relative", 
    top: "-4px"
},
star:{
    position: "relative", top: "6px", color: "#FBC02D"
},
inviteIcon:{
    position: "relative", top: "6px", 
    color: "#2F80ED"
},
reschedule:{
    color: "#2F80ED"
},
bodyContent:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    position: "relative", 
    top: "15px",
    left:"20px" 
},
bodyPlot:{
    fontWeight: "bold",
    fontSize: "14px"
},
bodyAddress:{
    fontSize: "12px",
    marginTop: "10px",
    width:"279px",
    wordBreak:"break-word"
},
bodyVisit:{
    fontSize: "10px",
    marginTop: "16px"
},
bodyDate:{
    fontWeight: "bolder",
    fontSize: "14px",
    // marginTop: "px", 
},
bodyStatus:{
    fontWeight: "bolder",
    fontSize: "14px",
    marginTop: "25px", 
},
inviteStatus:{
  fontWeight: "bold",
    position: "relative", top: "6px",color:"#33495E"
},
childRoot:{
  position:"relative",
  top:4,
  padding: "1px 0px"
}
});


export interface CardDetails {
    alt:string;
    src?: string;
    cancel?: string;
  }


export default function ImgMediaCard(props:CardDetails) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>   
    <div  className={classes.childRoot}>   
        <div className={classes.alignHeader}>
        <div className={classes.avatarHeader}>
            <Avatar alt={props.alt} src={props.src} />
            <div className={classes.nameHeader}>
                <span className={classes.nameAlign}>{props.alt}</span>
                <span>Tenant &middot; 5.0 <StarIcon className={classes.star} /></span>
            </div>
        </div>
        <div className={classes.rightHeader}>
            <Button><ChevronRightIcon className={classes.reschedule}/></Button>
            <span>3d ago</span>
        </div>
        </div>
        <div className={classes.bodyContent}>
            <div className={classes.bodyPlot}>2BHK - Godrej Prime</div>
            <div className={classes.bodyAddress}>4517 Washington Ave. Manchester, Kentucky 39495</div>
            <div className={classes.bodyVisit}>Visit Details</div>
            <div className={classes.bodyDate}>23 Nov &middot; 8 AM - 12 PM &emsp; <span className={classes.reschedule}><InsertInvitationIcon className={classes.inviteIcon}/> Reschedule</span></div>
            <div className={classes.bodyStatus}> <span><HourglassEmptyIcon className={classes.inviteStatus}/> Awaiting Confirmation..</span> &emsp;<Button  variant="outlined" color="secondary">{props.cancel}</Button> </div>
        </div>
        </div>
    </Card>
  );
}
