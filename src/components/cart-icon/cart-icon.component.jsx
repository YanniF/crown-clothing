import shoppingBag from "../../assets/shopping-bag.svg";
import './cart-icon.styles.scss';
import {useContext} from "react";
import {CartContext} from "../../context/cart.context.jsx";

const CartIcon = () => {
  const {isCartDropdownOpen, setIsCartDropdownOpen, cartItemCount} = useContext(CartContext);

  return (
    <button className="cart-icon-container ghost-button" onClick={() => setIsCartDropdownOpen(!isCartDropdownOpen)}>
      <img className="shopping-icon" src={shoppingBag} alt="shopping bag"/>
      <span className='item-count'>{cartItemCount}</span>
    </button>
  )
}

export default CartIcon
