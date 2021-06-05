import React from 'react';
import Navbar from "./screens/Navigation";
import Dashboard from "./screens/Dashboard";
import DashBoardCalendar from "./screens/DashboardCalender";
import TopNavigation from "./screens/components/topNav/TopNav";
import VisitSchedule from "./screens/VisitSchedule";
import FIlePath from "./screens/components/FilePath"

// images
import image from "./screens/components/icons/HomeLogo.svg";
import brooklyn from "./screens/components/icons/brooklyn.svg";
// redux
import { store } from "./redux/store/store";
import { Provider } from "react-redux";
// css
import './App.css'

function App() {
  return (
    <Provider store={store}>
    <div style={{ background: `#32127a`, 
                  maxHeight:"220px"
                  }}>  
      <Navbar
        image={image}
        alt="Homzhub"
        avatarAlt="Brooklyn Simmons"
        avatarSrc={brooklyn}
      />
      <FIlePath />
      <TopNavigation />
      {/* <Dashboard /> */}
      <DashBoardCalendar />
      {/* <VisitSchedule /> */}
    </div>
   </Provider>
  );
}

export default App;
