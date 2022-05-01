import {
  ADD_TO_CART,
  CALCULATE_AMOUNT_AND_ITEM,
  CLEAR_CART,
  REMOVE_ITEM,
  TOGGLE_AMOUNT,
} from '../actions/cart_actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { amount, product } = action.payload;
      console.log(product);
      const tempItem = state.cart.find((item) => item.id === product.id);
      if (tempItem) {
        const newCart = state.cart.map((cartItem) => {
          if (cartItem.id === product.id) {
            let newAmount = cartItem.amount + amount;
            return { ...cartItem, amount: newAmount };
          } else {
            return cartItem;
          }
        });
        return { ...state, cart: newCart };
      } else {
        const newItem = { ...product, amount };
        return { ...state, cart: [...state.cart, newItem] };
      }

    // TOGGLE AMOUNT
    case TOGGLE_AMOUNT:
      const { id, val } = action.payload;
      const newArray = state.cart.map((product) => {
        if (product.id === id) {
          if (val === 'inc') {
            let newAmount = product.amount + 1;
            return { ...product, amount: newAmount };
          }
          if (val === 'dec') {
            let newAmount = product.amount - 1;
            if (newAmount < 1) {
              newAmount = 1;
            }
            return { ...product, amount: newAmount };
          }
        }
        return product;
      });
      return { ...state, cart: newArray };

    // REMOVE ITEM
    case REMOVE_ITEM:
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload),
      };

    // CLEAR CART
    case CLEAR_CART:
      return { ...state, cart: [] };

    case CALCULATE_AMOUNT_AND_ITEM:
      const { total_items, total_amount } = state.cart.reduce(
        (total, cartItem) => {
          const { amount, price } = cartItem;
          total.total_items += amount;
          total.total_amount += price * amount;
          return total;
        },
        {
          total_items: 0,
          total_amount: 0,
        }
      );
      return { ...state, total_amount, total_items };

    default:
      throw new Error(
        `The action you want to utilize ${action.type} could not find.`
      );
  }
};
