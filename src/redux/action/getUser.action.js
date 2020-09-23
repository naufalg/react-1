import axios from "axios";
export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILED = "GET_USER_FAILED";

export const getUserRequest = () => {
  return {
    type: GET_USER_REQUEST,
  };
};

export const getUserSuccess = (result) => {
  return {
    type: GET_USER_SUCCESS,
    result,
  };
};

export const getUserFailed = (error) => {
  return {
    type: GET_USER_FAILED,
    error,
  };
};

export function getUsers() {
  return function (dispatch) {
    dispatch(getUserRequest());
    const url1 = "https://5f51a6865e98480016123bdd.mockapi.io/products";
    axios
      .get(url1)
      .then((result) => dispatch(getUserSuccess(result.data)))
      .catch((error) => dispatch(getUserFailed(error)));
  };
}
