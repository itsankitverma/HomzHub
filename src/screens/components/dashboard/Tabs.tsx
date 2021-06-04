import React from "react";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Card from "../dashboard/Card";
import CompletedCard from "./CompletedCard";
import { Container } from "@material-ui/core";
import brooklyn from "../icons/brooklyn.svg";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";
import mockData from "../json/mockData.json";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;


  



  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  cardWrapper: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "40px",
    alignItems: "center",
    justifyContent: "center",
  },
  contents: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    position: "relative",
    top: "40px",
  },
  labels: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  siteVisits: { color: "#808D9B", marginLeft: "10px" },
  week: {
    color: "#0084F8",
    marginLeft: "10px",
  },
  dates: {
    position: "relative",
    top: "60px",
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  let newDate = new Date().getDate();
  let newMonth = new Date().getMonth();
  let newYear = new Date().getFullYear();
  let Month = "";

  if (newMonth === 0) {
    Month = "Jan";
  } else if (newMonth === 1) {
    Month = "Feb";
  } else if (newMonth === 2) {
    Month = "Mar";
  } else if (newMonth === 3) {
    Month = "Apr";
  } else if (newMonth === 4) {
    Month = "May";
  } else if (newMonth === 5) {
    Month = "Jun";
  } else if (newMonth === 6) {
    Month = "Jul";
  } else if (newMonth === 7) {
    Month = "Aug";
  } else if (newMonth === 8) {
    Month = "Sep";
  } else if (newMonth === 9) {
    Month = "Oct";
  } else if (newMonth === 10) {
    Month = "Nov";
  } else if (newMonth === 11) {
    Month = "Dec";
  }

  return (
    <Container>
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Item One" {...a11yProps(0)} />
            <Tab label="Item Two" {...a11yProps(1)} />
            <Tab label="Item Three" {...a11yProps(2)} />
          </Tabs>
        </AppBar>

        <div className={classes.contents}>
          <label className={classes.labels}>
            <b className={classes.siteVisits}>{"5 Site visits"}</b>
          </label>
          <b className={classes.week}>This Week</b>
        </div>
        <div className={classes.dates}>
          <p>
            {newDate}, {Month} {newYear}
          </p>
        </div>

        <TabPanel value={value} index={0} dir={theme.direction}>
          <span className={classes.cardWrapper}>


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
              <Card 
              alt={e.name}
              src={brooklyn} 
              lastseen={e.lastseen}
              rating={e.rating}
              cancel="cancel"
              plot={e.plot}
              address={e.plot}
              date={e.date}
              month={e.Month}
              time={e.visitTime}
              Status={e.confirmed}
              logo={logo}
              />
            )
          })
        }
           
          </span>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}></TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <span className={classes.cardWrapper}>
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
              <CompletedCard 
              alt={e.name}
              src={brooklyn} 
              lastseen={e.lastseen}
              rating={e.rating}
              cancel="cancel"
              plot={e.plot}
              address={e.plot}
              date={e.date}
              month={e.Month}
              time={e.visitTime}
              Status={e.confirmed}
              logo={logo}
              />
            )
          })
        }
        </span>
        </TabPanel>
      </div>
    </Container>
  );
}
