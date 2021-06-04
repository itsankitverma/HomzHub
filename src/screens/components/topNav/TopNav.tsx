import Apartment from "../icons/NavLogo.svg";
import DropDown from "./Dropown";
import TodayIcon from "@material-ui/icons/Today";
import { Container } from "reactstrap";
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles({
  root:{
    display: "flex",
    justifyContent: "space-between",
    padding: "0 30px",
    backgroundColor:"white", 
    position: "relative", top: "20px",
  },
  flexStart:{
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  flexEnd:{
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center"
  }
});

const TopNav = () => {
  const classes = useStyles();
  return (
    <>
      <Container>
        <div className={classes.root}>        
          <div className={classes.flexStart}>
            <div>
              <img src={Apartment} alt="Apartment Logo" />
            </div>

            <div style={{ marginLeft: 10, marginTop: 15 }}>
              <h1>
                <b>30</b>
              </h1>
              <p>
                <b>Total Visits</b>
              </p>
            </div>
          </div>
          <div  className={classes.flexEnd}
          >
            <DropDown />
            <TodayIcon style={{ color: "#0084f8" }} />
          </div>
        </div>
      </Container>
    </>
  );
};

export default TopNav;
