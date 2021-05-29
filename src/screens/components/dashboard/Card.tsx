import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import "../../../App.css";
import { Avatar, Button } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import InsertInvitationIcon from "@material-ui/icons/InsertInvitation";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import { Container, Row, Col } from "reactstrap";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";
import mockData from "../json/mockData.json";

export interface CardDetails {
  alt:string;
  src?: string;
  cancel?: string;
}

function CardHome({ src, cancel,alt }: CardDetails) {
  const useStyles = makeStyles((theme) => ({
    parent: {
      marginTop: 20,
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
    }
  }));

  const classes = useStyles();

  return (
    <Container>
      <div>
        <div className={classes.parent}>
          {mockData.map((e) => {
            let Status = "";
            let colorStatus = "";
            let logo;

            if (e.confirmed === "Awaiting Confirmation") {
              Status = "AwaitingConfirmation";
              logo = <HourglassEmptyIcon />;
              colorStatus = "#33495E";
            } else if (e.confirmed === "Visit Scheduled") {
              Status = "Visit Scheduled";
              colorStatus = "#2CBA67";
              logo = <CheckCircleIcon style={{ color: "#2CBA67" }} />;
            } else if (e.confirmed === "Visit Cancelled") {
              Status = "Visit Cancelled";
              colorStatus = "#F23C06";
              logo = <CancelIcon style={{ color: "#F23C06" }} />;
            }

            return (
              <Paper
                elevation={3}
                className="Dashboard_Card"
                style={{
                  marginTop: 40,
                  marginLeft: 30
                }}
              >
                <div
                  style={{
                    marginTop: 10
                  }}
                >
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
                      <Avatar alt={alt} src={src} />
                      <div className="Dashboard_NameDetails">
                        <label className="Dashboard_NameTitle">
                          <b>{e.name}</b>
                        </label>
                        <p>
                          <b>
                            Tenant &middot; {e.rating}
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
                            <b>{e.lastseen}</b>
                          </p>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label
                      style={{
                        fontSize: "14px",
                        fontWeight: "bold",
                        display: "flex",
                        justifyContent: "flex-start",
                        padding: "5px 21px"
                      }}
                    >
                      <label>{e.plot}</label>
                    </label>
                    <div
                      style={{
                        fontSize: "14px",
                        fontWeight: "bold",
                        padding: "5px 21px"
                      }}
                    >
                      <label>{e.place}</label>
                    </div>
                    <span
                      style={{
                        fontSize: "10px",
                        fontWeight: "bold",
                        padding: "8px 22px"
                      }}
                    >
                      Visit Details
                    </span>

                    <div
                      style={{
                        fontSize: "14px",
                        fontWeight: "bold",
                        display: "flex",
                        justifyContent: "space-around",
                        padding: "8px 0",
                        lineHeight: 0.5
                      }}
                    >
                      <label>
                        {e.date} {e.Month} &middot; {e.visitTime}
                      </label>
                      <span
                        style={{
                          color: "#0084F8",
                          position: "relative",
                          top: "-8px"
                        }}
                      >
                        <InsertInvitationIcon /> Reschedule
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center"
                      }}
                    >
                      <label style={{ fontSize: "16px", fontWeight: "bold" }}>
                        {logo}
                        <b style={{ color: colorStatus, marginLeft: "10px" }}>
                          {Status}
                        </b>
                      </label>
                      <Button color="secondary">
                        {cancel}
                      </Button>
                    </div>
                  </div>
                </div>
              </Paper>
            );
          })}
        </div>
      </div>
    </Container>
  );
}

export default CardHome;
