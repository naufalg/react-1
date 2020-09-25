export const GET_GOOGLE = "GET_GOOGLE";
export const LOGOUT_GOOGLE = "LOGOUT_GOOGLE";

export const getGoogleAction = (data, history) => {
  // console.log("data di action", data);
  if (data !== undefined) {
    // console.log("getGoogleAction");
    localStorage.setItem("isLoggedIn", true);
    history.push("/LoggedInGooglePage");
  }

  return {
    type: GET_GOOGLE,
    payload: {
      profile: {
        name: data.profileObj.name,
        email: data.profileObj.email,
      },
    },
  };
};

export const logoutGoogleAction = (history) => {
  history.push("/googleLoginPage");
  localStorage.clear();
  return {
    type: LOGOUT_GOOGLE,
  };
};
