import Apartment from "../icons/NavLogo.svg";
import DropDown from "./Dropown";
import TodayIcon from "@material-ui/icons/Today";
import { Container } from "reactstrap";

const TopNav = () => {
  return (
    <>
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0 30px"
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center"
            }}
          >
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
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center"
            }}
          >
            <DropDown />
            {/* width:"50px" */}
            <TodayIcon style={{ color: "#0084f8" }} />
          </div>
        </div>
      </Container>
    </>
  );
};

export default TopNav;
