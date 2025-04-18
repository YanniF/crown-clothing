import {createContext, useReducer} from "react";
import {CART_ACTION_TYPES} from "./action-types.js";
import {createAction} from "../utils/reducer/reducer.utils.js";

const addCartItem = (cartItems, productToAdd) => {
  const productFound = cartItems?.find((product) => product.id === productToAdd.id);

  if (!productFound) {
    return [
      ...cartItems,
      {...productToAdd, quantity: 1}
    ]
  }

  return cartItems.map(item =>
    item.id === productToAdd.id ? {...item, quantity: item.quantity + 1} : item
  )
}

const removeCartItem = (cartItems, id) => {
  const productFound = cartItems?.find((product) => product.id === id);

  if (productFound.quantity === 1) {
    return cartItems.filter(item => item.id !== id)
  }

  return cartItems.map(item =>
    item.id === id ? {...item, quantity: item.quantity - 1} : item
  )
}

const initialState = {
  isCartDropdownOpen: false,
  cartItems: [],
  cartItemCount: 0,
  cartTotal: 0,
}

export const CartContext = createContext({
  isCartDropdownOpen: false,
  cartItems: [],
  cartItemCount: 0,
  cartTotal: 0,
  setIsCartDropdownOpen: () => {
  },
  addItemToCart: () => {
  },
  clearCartItems: () => {
  },
  removeItemFromCart: () => {
  },
})

const cartReducer = (state, action) => {
  const {type, payload} = action;

  if (type === CART_ACTION_TYPES.SET_CART_ITEMS) {
    return {
      ...state,
      ...payload
    };
  }
  else if (type === CART_ACTION_TYPES.SET_IS_CART_OPEN) {
    return {
      ...state,
      isCartDropdownOpen: payload.isCartDropdownOpen
    };
  }

  throw new Error('Unhandled type "' + type + '" in cartReducer');
}

export const CartProvider = ({children}) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const {cartItems, cartItemCount, cartTotal, isCartDropdownOpen} = state

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    const newCartTotal = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );

    dispatch(createAction(
      CART_ACTION_TYPES.SET_CART_ITEMS, {
      cartItems: newCartItems,
      cartItemCount: newCartCount,
      cartTotal: newCartTotal
    }));
  }

  const addItemToCart = (product) => {
    const items = addCartItem(cartItems, product)

    updateCartItemsReducer(items);
  }

  const removeItemFromCart = (id) => {
    const items = removeCartItem(cartItems, id);

    updateCartItemsReducer(items);
  }

  const clearCartItems = (id) => {
    const items = cartItems.filter(item => item.id !== id)

    updateCartItemsReducer(items);
  }

  const setIsCartDropdownOpen = () => {
    dispatch(createAction(
      CART_ACTION_TYPES.SET_IS_CART_OPEN, {
        isCartDropdownOpen: !isCartDropdownOpen
      })
    );
  }

  const value = {
    isCartDropdownOpen,
    setIsCartDropdownOpen,
    cartItems,
    cartItemCount,
    cartTotal,
    addItemToCart,
    clearCartItems,
    removeItemFromCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
