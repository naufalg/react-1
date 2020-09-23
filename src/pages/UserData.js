import React, { useEffect } from "react";
import BackTop from "../Components/Web-Elements/BackTop";
import { getUsersActions } from "../redux/action/getUser.action";
import { connect } from "react-redux";
import { Spinner } from "react-bootstrap";

function UserData(props) {
  // console.log("props atas", props);
  // console.log("props.getUsersData", props.getUsersData);
  useEffect(() => {
    // console.log(getUsers);
    props.getUsersActions();
  }, [props.getUsersActions]);

  return (
    <div className="container">
      <BackTop to="/Home2"></BackTop>
      <h3>User Data</h3>
      <br />
      <h5>
        <a href="https://5f51a6865e98480016123bdd.mockapi.io/products">
          https://5f51a6865e98480016123bdd.mockapi.io/products
        </a>
      </h5>
      <div className="row">
        {props.getUsersData.isLoading === true ? (
          <div className=" align-item-center col-12 justify-content-center">
            <Spinner animation="border" variant="info" />
          </div>
        ) : (
          props.getUsersData.data.map((item, index) => (
            <div className="col-sm-3" key={index}>
              <img src={item.avatar} alt="" />
              <p>name: {item.name}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (props) => {
  // console.log("props map state", props);
  return {
    getUsersData: props.getUsersReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  // console.log("dispatch");
  return {
    getUsersActions: () => dispatch(getUsersActions()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserData);
