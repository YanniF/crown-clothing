import shoppingBag from "../../assets/shopping-bag.svg";
import {useContext} from "react";
import {CartContext} from "../../context/cart.context.jsx";
import {CartIconContainer, ShoppingIcon, ItemCount} from './cart-icon.styles.jsx';

const CartIcon = () => {
  const {isCartDropdownOpen, setIsCartDropdownOpen, cartItemCount} = useContext(CartContext);

  return (
    <CartIconContainer className="ghost-button" onClick={() => setIsCartDropdownOpen(!isCartDropdownOpen)}>
      <ShoppingIcon src={shoppingBag} alt="shopping bag"/>
      <ItemCount>{cartItemCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon
