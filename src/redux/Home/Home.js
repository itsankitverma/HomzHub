import { connect } from "react-redux";
import Schedule from "../actions/actions";

const Home = (props) => {
  return (
    <>
      <h2>This is Redux Home - {props.alloted}</h2>
      <button onClick={props.Schedule}>Click</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    alloted: state.alloted
  };
};

const mapDipatchToProps = (dispatch) => {
  return {
    Schedule: () => dispatch(Schedule())
  };
};

export default connect(mapStateToProps, mapDipatchToProps)(Home);
