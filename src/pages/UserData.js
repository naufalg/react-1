import React, { useEffect } from "react";
import { getUsers } from "../redux/action/getUser.action";
import { connect } from "react-redux";

function UserData(props) {
    console.log("props", props);
    console.log("props.getUsers", props.getUsers);
  useEffect(() => {
    // console.log(getUsers);
    props.getUsers();
  }, [props.getUsers]);


  return (
    <div>
      <h3>User Data</h3>
      <h4>the data</h4>
      {props.getUsers.map((item, index) => (
        <div key={index}>
          <img src={item.getUsers.data.avatar} alt="" />
          <p>name: {item.getUsers.data.name}</p>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (props) => {
  return {
    getUsers: props.data,
  };
};


const mapDispatchToProps = (dispatch) => {
    return {
      getUsers: () => dispatch(getUsers()),
    };
  };
  

export default connect(mapStateToProps, mapDispatchToProps)(UserData);
