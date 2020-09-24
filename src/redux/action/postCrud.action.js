import axios from "axios";

export const POST_DATA = "POST_DATA";

export function setPostAction() {
  return {
    type: POST_DATA,
    // payload: data,
  };
}

export const postCrudActions = (values, e) => {
  e.preventDefault();
  console.log("tes", values, e);

  return axios
    .post("https://5f6c576f8d5ef70016ca0b19.mockapi.io/Product", values)
    .then((response) => {
      console.log(response);
      window.location.reload(true)
    })
    .catch((error) => {
      console.log(error);
    });
};
