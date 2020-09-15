import React, { Component } from "react";
import productList from "./Data/productList";
import Card from "./Web-Elements/Card/Card";

export default function ProductShow() {
  return (
    <div className="container text-center">
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
