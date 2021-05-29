import { SCHEDULE } from "../types/types";

const initalState = {
  alloted: 10
};

const reducers = (state = initalState, action) => {
  switch (action.type) {
    case SCHEDULE:
      return {
        ...state,
        alloted: state.alloted - 1
      };
    default:
      return state;
  }
};
export default reducers;
