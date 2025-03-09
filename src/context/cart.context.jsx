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

export const CartContext = createContext({
  isCartDropdownOpen: false,
  setIsCartDropdownOpen: () => {
  },
  cartItems: [],
  addItemToCart: () => {
  },
  cartItemCount: 0,
})

export const CartProvider = ({children}) => {
  const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    const count = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    setCartItemCount(count);
  }, [cartItems]);

  const addItemToCart = (product) => {
    const items = addCartItem(cartItems, product);
    setCartItems(items)
  }

  const value = {isCartDropdownOpen, setIsCartDropdownOpen, cartItems, addItemToCart, cartItemCount}

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}