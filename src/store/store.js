import { applyMiddleware, createStore, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';  // Correct way to import redux-thunk
import cartReducer from './reducers/cartReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
});

const initialState = {
  cart: {
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
