import { createStore } from 'redux'
import counterReducer from '../reducer/Counter.reducer';

export default createStore(counterReducer)

// import cartReducer from "../reducer/Cart.reducer"
// export default createStore(cartReducer)
