import { INCREMENT, DECREMENT } from "../action/Counter.action";

const initialCount = {
  count: 0,
};
const countReducer = (state = initialCount, action) => {
  // console.log("state.count",state.count);
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default countReducer;
