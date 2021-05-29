import { Avatar, Button } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import mockDataMissed from "../../json/mockDataMissed.json";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

export const mockDataMissedOne = (
  <>
    {mockDataMissed.map((e) => {
      return (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around"
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start"
              }}
            >
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <div className="Dashboard_NameDetails">
                <label className="Dashboard_NameTitle">
                  <b>{e.name}</b>
                </label>
                <p>
                  <b>
                    Tenant &middot; 5.0
                    <StarIcon style={{ color: "#FBC02D" }} />
                  </b>
                </p>
              </div>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end"
                }}
              >
                <ChevronRightIcon style={{ color: "#0084F8" }} />
                <label className="Dashboard_NameTitle">
                  <p style={{ fontSize: "12px" }}>
                    <b>3d ago</b>
                  </p>
                </label>
              </div>
            </div>
          </div>
        </>
      );
    })}
  </>
);
