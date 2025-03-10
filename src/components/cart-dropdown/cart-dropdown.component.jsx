import {useContext} from "react";
import {CartContext} from "../../context/cart.context.jsx";
import CartItem from "../cart-item/cart-item.component.jsx";
import './cart-dropdown.styles.scss'
import Button from "../button/button.component.jsx";
import {useNavigate} from "react-router-dom";

const CartDropdown = () => {
  const {cartItems, setIsCartDropdownOpen} = useContext(CartContext);
  const navigate = useNavigate()

  const goToCheckout = () => {
    navigate('/checkout');
    setIsCartDropdownOpen(false)
  }

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map(item => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckout}>GO TO CHECKOUT</Button>
    </div>
  );
}

export default CartDropdown;