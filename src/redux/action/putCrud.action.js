import axios from "axios";

export const PUT_DATA = "PUT_DATA";

export function setPutAction() {
  return {
    type: PUT_DATA,
    // payload: data,
  };
}

export const putCrudActions = (values, e) => {
  e.preventDefault();
  console.log("tes", values, e);

  return axios
    .put("https://5f6c576f8d5ef70016ca0b19.mockapi.io/Product", values)
    .then((response) => {
      console.log(response);
      window.location.reload(true)
    })
    .catch((error) => {
      console.log(error);
    });
};
