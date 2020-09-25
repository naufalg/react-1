import React from "react";
import { useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";

import LogoutGoogleComponents from "../Components/Web-Elements/LogoutGoogleComponents";

export default function LoggedInGooglePage() {
  const userData = useSelector(
    (state) => state.googleLoginReducer.google
  );
  // console.log("userData", userData);

  return (
    <div className="container">
      {userData.profile !== undefined ? (
        <div>
          <h4>Hello, {userData.profile.name}!</h4>
          <br />
          <h4>Your e-mail is: {userData.profile.email}</h4>
          <br/>
          <p>Press Logout, to go back</p>
          <LogoutGoogleComponents />
        </div>
      ) : (
        <Spinner animation="border" variant="secondary" />
      )}
    </div>
  );
}
