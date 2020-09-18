import React from "react";
import productList from "../Components/Data/productList";
import Card from "../Components/Web-Elements/Card/Card";
import BackTop from '../Components/Web-Elements/BackTop'


export default function ProductShow() {
  return (
    <div className="container text-center">
    <BackTop to="/"></BackTop>
      <div className="row">
        <div className="card-deck">
          {productList.map((item, idx) => (
            <Card key={idx} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
