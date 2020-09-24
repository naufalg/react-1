import React from "react";

export default function Card(props) {
    // console.log(props);
    console.log("name", props.name);

  return (
    <div className="card shadow" style={{ width: "18rem" }}>
      <img className="card-img-top" src={props.img} alt="Card image cap" />
      <div className="card-body">
        <p className="card-text text-dark">
        {props.name}
        <br></br>
        Rp {props.price}.000
        </p>
      </div>
    </div>
  );
}
