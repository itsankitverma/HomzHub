import React from 'react';
import Navbar from "./screens/Navigation";
import Dashboard from "./screens/Dashboard";
import DashBoardCalender from "./screens/DashboardCalender";
import TopNavigation from "./screens/components/topNav/TopNav";
import VisitSchedule from "./screens/VisitSchedule";
// images
import image from "./screens/components/icons/HomeLogo.svg";
// redux
import { store } from "./redux/store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
    <div className="">      
      <Navbar
        image={image}
        alt="Homzhub"
        avatarAlt="Remy Sharp"
        avatarSrc="/static/images/avatar/1.jpg"
      />
      <TopNavigation />
      <Dashboard />
      {/* <DashBoardCalender /> */}
      {/* <VisitSchedule /> */}
    </div>
   </Provider>
  );
}

export default App;
