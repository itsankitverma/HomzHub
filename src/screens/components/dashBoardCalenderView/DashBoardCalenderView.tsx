import React, { useState } from "react";
import { Avatar, Button, Container, makeStyles } from "@material-ui/core";
import "../../../App.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import InsertInvitationIcon from "@material-ui/icons/InsertInvitation";
import { mockDataMissedOne } from "./reusableCards/mockDataMissedOne";
import mockDetailsCalendar from "../json/mockDetailsCalendar.json";
import Paper from "@material-ui/core/Paper";
import mockData from "../json/completedMockData.json";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import StarIcon from "@material-ui/icons/Star";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";

  const useStyles = makeStyles((theme) => ({
    parentRoot:{
      display: "flex",
      flexDirection: "column",
      justifyContent:"center",
      alignItems:"center"
    },
    root: {
      display: "flex",
      justifyContent: "space-evenly",
      marginTop:"20px"
    },
    paper:{
      borderBottom: "2px solid black",
      padding: "20px 0",
      maxWidth:"475px"
    },
    CalendrView: {
      display: "flex",     
      alignItems: "center",
      justifyContent: "center"
    },
    dashboardNameDetails: {
      marginLeft: "20px"
    },
    dashboardNameTitle: {
      // fontSize: "16px",
      // marginTop: 20,
    },
    flexStart:{
      display: "flex",
      justifyContent: "flex-start",
      position: "relative",
      left: "40px",
      flexDirection: "column"
    },
    visitFlexStart:{
      display: "flex",
      justifyContent: "flex-start",
      position: "relative",
      top: "-10px"
    },
    noVisitsFound:{
      display:"flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height:"40vh",
      position: "relative",
      left: "80px",
      maxWidth:"475px"
    },
    "@media (max-width: 768px)": {
      root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      },
      CalendrView: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      },
      rightCard: {
        fontSize: "16px",
        marginTop: 20,
      },
      timings: {
        // fontSize: "16px",
        marginTop: 20
      }
    }
  }));

export interface DashBoardCalenderViewProps{
  name:string;
  src:string;
}

function DashBoardCalenderView({name, src}:DashBoardCalenderViewProps) {
  const [value, onChange] = useState(new Date());
  const [details, setdetails] = useState({
    name: "",
    plot: "",
    place: "",
    date: "",
    time: ""
  })

  const classes = useStyles();

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <Container>
        <div className={classes.parentRoot}>
        <div className={classes.root}>
          <div>
            <h5>Select Date</h5>
            <div className={classes.CalendrView}>
              <Calendar 
              // onChange={onChange}
               value={value} />
            </div>
            <h5 >Select Timings</h5>
            <div
              style={{
                marginLeft: "20px"
              }}
            >
              <Button variant="contained">All</Button>
              <Button
                variant="contained"
                style={{ background: "#0084F8", color: "white" }}
                color="primary"
              >
                8 AM - 12 PM
              </Button>
              <Button variant="contained">12 PM - 3 PM</Button>
              <Button variant="contained">3 PM - 6 PM</Button>
              <Button variant="contained">6 PM - 8 PM</Button>
            </div>
          </div>
          <div style={{ width: "100%", position: "relative", left: "40px" }}>
            {/* mao from here */}
            <h4 >
              <b>Visits</b>
            </h4>
            {mockDetailsCalendar.length === 0 ? (
              <>
              <div className={classes.noVisitsFound} >
                <InsertInvitationIcon style={{ color: "#0084f8" }} />
                <p style={{ position:"relative", top:"20px" }}>No Visits Found</p>
              </div>
              </>
            ) : (
              <>
                {mockDetailsCalendar.map((e) => {
                  return (
                    <Paper
                      elevation={3}
                      className={classes.paper}
                    >
                      <div>
                        <div
                         className={classes.flexStart}
                        >
                          <p style={{ fontWeight: "bold" }}>
                            <b>{e.plot}</b>
                          </p>
                          <p style={{ fontWeight: "bold" }}>
                            <b>{e.place}</b>
                          </p>
                          <p>Visit Details</p>
                          <div
                            className={classes.visitFlexStart}
                          >
                            <p>
                              <b style={{ fontWeight: "bold" }}>
                                {e.date} &middot; {e.visitTime}
                              </b>
                            </p>
                            <span
                              style={{
                                float: "right"
                              }}
                            >
                              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                              <InsertInvitationIcon
                                style={{ color: "#0084f8" }}
                              />
                              Reschedule
                            </span>
                          </div>
                          <p style={{ fontWeight: "bold" }}>
                            <b>Completed</b>
                          </p>
                        </div>

                        {/*  card starts */}
                        {mockData.map((e) => {
                          return (
                            <>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-around",
                                  width:"500px"
                                }}
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "flex-start"
                                  }}
                                >
                                  <Avatar
                                    alt={name}
                                    src={src}
                                  />                                  
                                  <div   className={classes.dashboardNameDetails} 
                                  >
                                    <label
                                      onClick={() => {
                                        toggle();
                                        setdetails({
                                          name: e.name,
                                          plot: e.plot,
                                          place: e.place,
                                          date: e.date,
                                          time: e.visitTime
                                        });
                                      }}                                    
                                    >
                                      <b>{e.name}</b>
                                    </label>
                                    <p>
                                      <b>
                                        Tenant &middot; 5.0
                                        <StarIcon
                                          style={{ color: "#FBC02D" }}
                                        />
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
                                    <ChevronRightIcon
                                      style={{ color: "#0084F8" }}
                                    />
                                    <label >
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
                        {/* card ends */}

                        <p
                          style={{
                            display: "flex",
                            justifyContent: "flex-start",
                            position: "relative",
                            left: "40px",
                            flexDirection: "column",
                            fontWeight: "bold",
                            width:"500px"
                          }}
                        >
                          <b>Missed</b>
                        </p>
                        {/*  catd starts */}
                        {mockDataMissedOne}
                        {/* card ends */}
                      </div>
                    </Paper>
                  );
                })}
              </>
            )}

            <Modal isOpen={modal} toggle={toggle}>
              <ModalHeader toggle={toggle}>Profile</ModalHeader>
              <ModalBody>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Avatar
                  alt={name}
                  src={src}
                  /> 
                </div>
                <p>{details.name}</p>
                <p>Tenant</p>
                <p>{details.plot}</p>
                <p>{details.place}</p>
                <p>
                  {details.date} Nov {details.time}
                  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                  <InsertInvitationIcon style={{ color: "#0084f8" }} />
                  Reschedule
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around"
                  }}
                >
                  <div>
                    <Button color="primary">
                      <CheckCircleIcon style={{ color: "#2CBA67" }} />
                      Accept
                    </Button>
                  </div>
                  <div>
                    <Button color="primary" onClick={() => setModal(!modal)}>
                      <CancelIcon style={{ color: "#F23C06" }} />
                      Cancel
                    </Button>
                  </div>
                </div>
              </ModalBody>
            </Modal>
          </div>
        </div>
        </div>
      </Container>
    </>
  );
}
export default DashBoardCalenderView;
