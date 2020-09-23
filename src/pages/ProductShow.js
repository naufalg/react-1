import React from "react";
import productList from "../Components/Data/productList";
import Card from "../Components/Web-Elements/Card/Card";
import BackTop from '../Components/Web-Elements/BackTop'
import { connect } from 'react-redux';
import {addCart, minusCart} from '../redux/action/Cart.action';

console.log("productList", productList);

function ProductShow() {
  return (
    <div className="container text-center">
    <BackTop to="/"></BackTop>
      <div className="row">
        <div className="card-deck">
          {productList.map((item, idx) => (
            <Card key={idx} name={item.name} img={item.img} price={item.price} />
          ))}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    cart: state.cart,
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch)
  return {
    addCart : () => dispatch(addCart()),
    minusCart : () => dispatch(minusCart())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow)