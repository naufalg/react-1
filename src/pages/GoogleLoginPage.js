import React from "react";
import { useHistory } from "react-router-dom";

import GoogleLogin from "react-google-login";
import { useDispatch } from "react-redux";
import BackTop from "../Components/Web-Elements/BackTop";

import { getGoogleAction } from "../redux/action/googleLogin.action";

export default function GoogleLoginPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  const responseGoogle = (response) => {
    // console.log("response component", response);
    dispatch(getGoogleAction(response, history));
  };
  return (
    <div className="container">
      <BackTop to="/Home3"></BackTop>

      <p>Click to login v</p>
      <GoogleLogin
        clientId="350987835368-r6ssc143klo5qrluacnsbfknt2fh2267.apps.googleusercontent.com"
        // buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}
