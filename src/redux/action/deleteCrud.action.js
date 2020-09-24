import axios from "axios";
// import {getCrudActions} from './getCrud.action'

export const DELETE_DATA = "DELETE_DATA";
// export const DELETE_DATA_SUCCESS = "DELETE_DATA_SUCCESS";
// export const DELETE_DATA_FAILED = "DELETE_DATA_FAILED";

export const deleteCrudRequest = () => {
  return {
    type: DELETE_DATA,
  };
};

export function deleteCrudActions(id, e) {
  return function (dispatch) {
    dispatch(deleteCrudRequest());
    const url2 = `https://5f6c576f8d5ef70016ca0b19.mockapi.io/Product/${id}`;
    axios
      .delete(url2)
      .then((response) => {
          console.log(response);
          window.location.reload(true)
      })
      .catch((error) => {
          console.log(error);
      });
  };
}
