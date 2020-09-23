import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
} from "../action/getUser.action";

const initialUserState = {
  data: [],
  isLoading: false,
  error: null,
};
const getUserReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.result,
      };
    case GET_USER_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default getUserReducer;
