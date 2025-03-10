import {createContext, useEffect, useState} from "react";

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

export const CartProvider = ({children}) => {
  const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const count = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartItemCount(count);

    const total = cartItems.reduce((acc, current) => acc + current.price * current.quantity, 0);
    setCartTotal(total);
  }, [cartItems]);

  const addItemToCart = (product) => {
    const items = addCartItem(cartItems, product);
    setCartItems(items)
  }

  const removeItemFromCart = (id) => {
    const items = removeCartItem(cartItems, id);
    setCartItems(items)
  }

  const clearCartItems = (id) => {
    const items = cartItems.filter(item => item.id !== id)
    setCartItems(items)
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