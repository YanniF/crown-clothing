import {useContext} from "react";
import {CartContext} from "../../context/cart.context.jsx";
import CartItem from "../cart-item/cart-item.component.jsx";
import Button from "../button/button.component.jsx";
import {useNavigate} from "react-router-dom";
import {CartDropdownContainer, CartItems, EmptyMessage} from "./cart-dropdown.styles.jsx";

const CartDropdown = () => {
  const {cartItems, setIsCartDropdownOpen} = useContext(CartContext);
  const navigate = useNavigate()

  const goToCheckout = () => {
    navigate('/checkout');
    setIsCartDropdownOpen(false)
  }

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length === 0 ? (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        ) : (
          cartItems.map(item => (
            <CartItem key={item.id} cartItem={item}/>
          ))
        )}
      </CartItems>
      <Button onClick={goToCheckout}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
}

export default CartDropdown;