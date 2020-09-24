import axios from "axios";
export const GET_DATA_REQUEST = "GET_DATA_REQUEST";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAILED = "GET_DATA_FAILED";

export const getCrudRequest = () => {
  return {
    type: GET_DATA_REQUEST,
  };
};

export const getCrudSuccess = (result) => {
  return {
    type: GET_DATA_SUCCESS,
    result,
  };
};

export const getCrudFailed = (error) => {
  return {
    type: GET_DATA_FAILED,
    error,
  };
};

export function getCrudActions() {
  return function (dispatch) {
    dispatch(getCrudRequest());
    const url1 = "https://5f6c576f8d5ef70016ca0b19.mockapi.io/Product";
    axios
      .get(url1)
      .then((result) => dispatch(getCrudSuccess(result.data)))
      .catch((error) => dispatch(getCrudFailed(error)));
  };
}
