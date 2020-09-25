import { GET_GOOGLE, LOGOUT_GOOGLE } from "../action/googleLogin.action";

const initialLoginState = {
  google: {},
};
export default (state = initialLoginState, action) => {
  // console.log("state reducer", state);
  switch (action.type) {
    case GET_GOOGLE:
      return {
        ...state,
        google: action.payload,
      };
    case LOGOUT_GOOGLE:
      return initialLoginState;
    default:
      return state;
  }
};
