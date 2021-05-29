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
import "../../../App.css"
import TextArea from "./TextArea";

const Example = () => {
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
    <div className="tabsCenter">
      <Nav tabs className="pt-5">
        <Row
          className="pt-3"
          style={{
            position: "relative",
            left: "100px",
            top:"-20px"
          }}
        >
          <Col xs="8">
            <NavItem className="Form_TabOne">
              <NavLink
                style={{ color: "white" }}
                className={classnames({ active: activeTab === "2" })}
                onClick={() => {
                  toggle("1");
                }}
              >
                IN PERSON
              </NavLink>
            </NavItem>
          </Col>
          <Col xs="4">
            <NavItem className="Form_TabTwo">
              <NavLink
                style={{ border: "white" }}
                className={classnames({ active: activeTab === "1" })}
                onClick={() => {
                  toggle("2");
                }}
              >
                VIRTUAL
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
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  textAlign: "center"
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center"
                  }}
                >
                  <TimerIcon
                    style={{
                      position: "relative",
                      top: "3px"
                    }}
                  />

                  <h6 className="pt-3 pl-6">
                    &nbsp;&nbsp;
                    <b>Join next visit at 4PM, Today</b>
                  </h6>
                </div>

                <AddIcon onClick={() => handleAdd()} />
              </div>
              <div className="pt-3">
                <h6 className="pt-3">
                  <b>Select Date</b>
                </h6>
                <div className="pt-3">
                  <Calenders />
                </div>
              </div>
              <div className="pt-3">
                <h6 className="pt-3">
                  <b>Select Timings</b>
                </h6>
              </div>
              <div className="pt-3">
                {/* <center> */}
                  <Row>
                    <Col
                      xs="6"
                      className="FirstTime"
                      style={{
                        cursor: "pointer"
                      }}
                      onClick={() => setSelectTime("8 AM - 12 PM")}
                    >
                      8 AM - 12 PM
                    </Col>
                    <Col
                      className="SecondTime"
                      xs="6"
                      style={{ cursor: "pointer" }}
                      onClick={() => setSelectTime("12 PM - 3 PM")}
                    >
                      12 PM - 3 PM
                    </Col>
                  </Row>
                  <Row className="pt-5">
                    <Col
                      className="ThirdTime"
                      xs="6"
                      style={{ cursor: "pointer" }}
                      onClick={() => setSelectTime("3 PM - 6 PM")}
                    >
                      3 PM - 6 PM
                    </Col>
                    <Col
                      className="FourthTime"
                      xs="6"
                      style={{ cursor: "pointer" }}
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
                  <b>Message</b>
                </p>
                <p className="pt-5">
                  <i>Optional</i>
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
