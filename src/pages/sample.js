import React, { useEffect } from "react";
import { getUsersActions } from "../redux/action/getUser.action";
import { connect } from "react-redux";

function UserData(props) {
  console.log("props", props);
  // console.log("props.getUsers", props.getUsers);
  const getDataUser = props.getUsersActions;
  useEffect(() => {
    console.log("useeffect");
    getDataUser();
  }, [getDataUser]);

  return (
    <div>
      <h3>User Data</h3>
      <h4>the data</h4>
      {/* {props.getUsers === undefined ? (
        <h1>Loading</h1>
      ) : (
        props.getUsers.map((item, index) => (
          <div key={index}>
            <img src={item.getUsers.data.avatar} alt="" />
            <p>name: {item.getUsers.data.name}</p>
          </div>
        ))
      )} */}
      {props.getUsers.map((item, index) => (
        <div key={index}>
          {/* <img src={item.getUsers.data.avatar} alt="" />
          <p>name: {item.getUsers.data.name}</p> */}
          <h1>{item.name}</h1>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (props) => {
  console.log("props map state", props);
  return {
    getUsers: props.getUsers.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log("dispatch");
  return {
    getUsersActions: () => dispatch(getUsersActions()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserData);