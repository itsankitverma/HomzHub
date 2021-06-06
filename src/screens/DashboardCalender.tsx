// import TopNav from "../TopNav/TopNav";
import DashBoardCalenderView from "./components/dashBoardCalenderView/DashBoardCalenderView";
import brooklyn from "./components/icons/brooklyn.svg";

const Dashboard = () => {
  return (
    <>
      {/* <TopNav /> */}
      <DashBoardCalenderView 
        name={"Brooklyn Simmons"}
        src={brooklyn}
        />
    </>
  );
};

export default Dashboard;
