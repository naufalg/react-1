import React, { useState, useEffect } from "react";
import axios from "axios"
import BackTop from '../Components/Web-Elements/BackTop'

export default function useEffectTest() {
  const [data1, setData1] = useState();
  const [render1, setRender1] = useState([]);

  useEffect(() => {
    console.log("mounting");
    // fetch normal
    // fetch(`https://jsonplaceholder.typicode.com/${data1}`)
    //   .then((res) => res.json())
    //   .then((res) => setRender1(res));

    // axios
    axios.get(`https://jsonplaceholder.typicode.com/${data1}`)
    .then((response) => {
        console.log(response);
        setRender1(response.data)
    })
  }, [data1]);

  return (
    <div className="container text-center">
        <BackTop to="/Home2"></BackTop>
      <div className="row">
        <div className="col-12">
          <h3>React Fetching Data</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <button className="btn btn-primary" onClick={() => setData1("Posts")}>
            Posts
          </button>
          &nbsp;
          <button className="btn btn-info" onClick={() => setData1("Users")}>
            Users
          </button>
          &nbsp;
          <button className="btn btn-warning" onClick={() => setData1("Todos")}>
            Todos
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-12">{data1}</div>
        <div className="col-12">
          {render1.map((item, index) => (
            <div key={index}>
              <p>{JSON.stringify(item)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
