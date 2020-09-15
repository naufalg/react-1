import React from "react";

export default function Card({product}) {
    console.log(product);
  return (
    <div className="card shadow" style={{ width: "18rem" }}>
      <img className="card-img-top" src={product.img} alt="Card image cap" />
      <div className="card-body">
        <p className="card-text text-dark">
        {product.name}
        <br></br>
        Rp {product.price}.000
        </p>
      </div>
    </div>
  );
}
