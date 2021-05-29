import Modals from "./components/visitSchedule/Modals";

const VisitSchedule = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "30vh"
      }}
    >
      <Modals
        title="Schedule a Visit"
        headTitle="headTitle"
        confirm="confirm"
        cancel="cancel"
      />
    </div>
  );
};

export default VisitSchedule;
