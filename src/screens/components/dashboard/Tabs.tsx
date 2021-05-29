import React from 'react';
// import SwipeableViews from 'react-swipeable-views';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from "./Card";
import CompletedCard from "./CompletedCard";
import { Container } from '@material-ui/core';

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
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
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

      <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            position: "relative",
            top: "40px"
          }}
        >
          <label style={{ fontSize: "16px", fontWeight: "bold" }}>
            <b style={{ color: "#808D9B", marginLeft: "10px" }}>
              {"5 Site visits"}
            </b>
          </label>
          <b style={{ color: "#0084F8", marginLeft: "10px" }}>This Week</b>
        </div>
        <div style={{ position: "relative", top: "60px" }}>
          <p>
            {newDate}, {Month} {newYear}
          </p>
        </div>

      {/* <SwipeableViews */}
        {/* axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      > */}
        <TabPanel value={value} index={0} dir={theme.direction}>
        <Card
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            cancel="Cancel"
          />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <CompletedCard alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </TabPanel>
      {/* </SwipeableViews> */}
    </div>
    </Container>
  );
}
