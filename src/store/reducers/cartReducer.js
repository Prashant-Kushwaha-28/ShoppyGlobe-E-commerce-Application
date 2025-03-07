import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_QUANTITY, SET_PRODUCTS } from '../actions/actionTypes';

const initialState = {
  items: [],
  products: [],
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      console.log("Setting Products in Redux:", action.payload); // ✅ Debug Redux
      return { ...state, products: action.payload || [] };

    case ADD_TO_CART:
      if (!action.payload || !action.payload.id) {
        console.error('Invalid payload or missing id');
        return state;
      }

      if (!state.items || !Array.isArray(state.items)) {
        return { ...state, items: [] };
      }

      const existingItem = state.items.find((item) => item.id === action.payload.id);

      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }]
        };
      }

    case REMOVE_FROM_CART:
      if (!action.payload) {
        console.error('Invalid payload or missing id');
        return state;
      }
    
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload)
      };

    case UPDATE_CART_QUANTITY:
      if (!action.payload || !action.payload.id || action.payload.quantity < 1) {
        console.error('Invalid payload or missing id');
        return state;
      }

      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };

    default:
      return state;
  }
};

export default cartReducer;
