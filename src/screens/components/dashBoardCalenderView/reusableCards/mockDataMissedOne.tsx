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
                                    alt="Brooklyn Simmons"
                                    src="/static/images/avatar/1.jpg"
                                  />                                  
                                  <div   
                                    style={{  marginLeft: "20px"}}
                                  >
                                    <label>
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
  </>
);
