import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";
import Calenders from "./Calender";
import AddIcon from "@material-ui/icons/Add";
import TimerIcon from "@material-ui/icons/Timer";
import { makeStyles } from "@material-ui/core/styles";
import "../../../App.css"
import TextArea from "./TextArea";

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    position: "relative",
    left: "100px",
    top:"-20px"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  tabsCenter:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "relative",
    alignItems: "center"
  },
  formTabOne:{
    position: "absolute",
    width: "200px",
    /* height: 36px; */
    left: "12px",
    top: "-6px",
    background: "#0084f8",
    borderRadius: "4px",
    textAlign: "center",
    color: "#ffffff"
  },
  formTabTwo:{
    position: "absolute",
    width: "209px",
    top: "-7px",
    left: "212px",
    background: "#ffffff",
    textAlign: "center",
    border: "1px solid #0084f8",
    boxSizing: "border-box",
    borderRadius: "4px",
  },
  bodyCenter:{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center"
  },
  firstTime:{
    position: "absolute",
    width: "208px",
    height: "29px",
    left: "20px",
    color: "#ffffff",
    background: "#0084f8",
    borderRadius: "4px",
    textAlign: "center",
    cursor: "pointer",
  },
  secondTime:{
    position: "absolute",
    width: "208px",
    height: "29px",
    left: "238px",
    textAlign: "center",
    background: "#f0f5f9",
    borderRadius: "4px", 
    cursor: "pointer"
  },
  thirdTime:{
    position: "absolute",
    width: "208px",
    height: "29px",
    left: "15px",
    textAlign: "center",
    background: "#f0f5f9",
    borderRadius: "4px",
    cursor: "pointer"
  },
  fourthTime:{
    position: "absolute",
    width: "208px",
    height: "29px",
    left: "238px",
    textAlign: "center",
    background: "#f0f5f9",
    borderRadius: "4px",
    cursor: "pointer"
  }
}));

export interface TabProps{
  inPerson:string;
  virtual: string;
  nextVisit:string;
  selectDate:string;
  SelectTimings:string;
  message: string;
  optional: string;
}

const Example = (props: TabProps) => {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState("1");
  const [SelectTime, setSelectTime] = useState("");
  const [AddSlot, setAddSlot] = useState([]);
  const [Text, setText] = useState("");

  const toggle = (tab: React.SetStateAction<string>) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const handleAdd = () => {
    setAddSlot([...AddSlot]);
  };

  return (
    <div className={classes.tabsCenter}>
      <Nav tabs className="pt-5">
        <Row
          className="pt-3"
        >
          <Col xs="8">
            <NavItem className={classes.formTabOne}>
              <NavLink
                style={{ color: "white" }}
                className={classnames({ active: activeTab === "2" })}
                onClick={() => {
                  toggle("1");
                }}
              >
                {props.inPerson}
              </NavLink>
            </NavItem>
          </Col>
          <Col xs="4">
            <NavItem className={classes.formTabTwo}>
              <NavLink
                style={{ border: "white" }}
                className={classnames({ active: activeTab === "1" })}
                onClick={() => {
                  toggle("2");
                }}
              >
               {props.virtual}
              </NavLink>
            </NavItem>
          </Col>
        </Row>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <div
              className={classes.bodyCenter}
              >
                <div
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <TimerIcon
                    style={{ position: "relative", top: "3px" }}
                  />

                  <h6 className="pt-3 pl-6">
                    &nbsp;&nbsp;
                    <b> {props.nextVisit}</b>
                  </h6>
                </div>

                <AddIcon onClick={() => handleAdd()} />
              </div>
              <div className="pt-3">
                <h6 className="pt-3">
                  <b> {props.selectDate}</b>
                </h6>
                <div className="pt-3">
                  <Calenders />
                </div>
              </div>
              <div className="pt-3">
                <h6 className="pt-3">
                  <b> {props.SelectTimings}</b>
                </h6>
              </div>
              <div className="pt-3">
                {/* <center> */}
                  <Row>
                    <Col
                      xs="6"
                      className={classes.firstTime}
                      onClick={() => setSelectTime("8 AM - 12 PM")}
                    >
                      8 AM - 12 PM
                    </Col>
                    <Col
                    className={classes.secondTime}
                      xs="6"                     
                      onClick={() => setSelectTime("12 PM - 3 PM")}
                    >
                      12 PM - 3 PM
                    </Col>
                  </Row>
                  <Row className="pt-5">
                    <Col
                      className={classes.thirdTime}
                      xs="6"                     
                      onClick={() => setSelectTime("3 PM - 6 PM")}
                    >
                      3 PM - 6 PM
                    </Col>
                    <Col
                    className={classes.fourthTime}
                      xs="6"
                      onClick={() => setSelectTime("6 PM - 8 PM")}
                    >
                      6 PM - 8 PM
                    </Col>
                  </Row>
                {/* </center> */}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p
                  className="pt-5"
                  style={{ cursor: "pointer" }}
                  onClick={() => setSelectTime("8 AM - 12 PM")}
                >
                  <b>{props.message}</b>
                </p>
                <p className="pt-5">
                  <i>{props.optional}</i>
                </p>
              </div>
              <div>
                <TextArea onChange={(e:any) => setText(e.target.value)} rows={4} cols={50} maxlength={200}/>
                <p>Characters remaining: {200 - Text.length}</p>
              </div>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <div>coming soon</div>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Example;
