import {ADD, MINUS} from '../action/Cart.action';


const initialCart = {
  cart: [],
};

const cartReducer = (state = initialCart, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        cart: state.cart,
      };
    case MINUS:
      return {
        ...state,
        cart: state.cart,
      };

    default:
      return state;
  }
};

export default cartReducer