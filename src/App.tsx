import React from 'react';
import Navbar from "./screens/Navigation";
import Dashboard from "./screens/Dashboard";
import DashBoardCalender from "./screens/DashboardCalender";
import TopNavigation from "./screens/components/topNav/TopNav";
import VisitSchedule from "./screens/VisitSchedule";
import FIlePath from "./screens/components/FilePath"

// images
import image from "./screens/components/icons/HomeLogo.svg";
import Background from "./icons/background.svg"
// redux
import { store } from "./redux/store/store";
import { Provider } from "react-redux";
// css
import './App.css'

function App() {
  return (
    <Provider store={store}>
    <div style={{ background: `url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEUAv/6eIlC2AAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=)`, 
                  maxHeight:"220px"
                  }}>  
      <Navbar
        image={image}
        alt="Homzhub"
        avatarAlt="Brooklyn Simmons"
        avatarSrc="/static/images/avatar/1.jpg"
      />
      <FIlePath />
      <TopNavigation />
      <Dashboard />
      {/* <DashBoardCalender /> */}
      {/* <VisitSchedule /> */}
    </div>
   </Provider>
  );
}

export default App;
