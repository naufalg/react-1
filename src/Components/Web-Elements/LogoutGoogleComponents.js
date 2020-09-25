import React from "react";
import { GoogleLogout } from "react-google-login";
import { useHistory } from "react-router-dom";

// redux
import { logoutGoogleAction } from "../../redux/action/googleLogin.action";
import { useDispatch } from "react-redux";

export default function LogoutGoogleComponents() {
  const history = useHistory();
  const dispatch = useDispatch();

  const logoutSuccess = () => {
    dispatch(logoutGoogleAction(history));
    alert("Logout successful");
  };

  return (
    <div className="container">
      <GoogleLogout
        clientId="863578905324-fp7872smtq6jro9uscl2fnjvjjoobea8.apps.googleusercontent.com"
        onLogoutSuccess={logoutSuccess}
      />
    </div>
  );
}
