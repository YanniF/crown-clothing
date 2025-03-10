import {useContext} from "react";
import {CartContext} from "../../context/cart.context.jsx";
import './checkout-item.styles.scss'

const CheckoutItem = ({ cartItem }) => {
  const { id, imageUrl, name, quantity, price } = cartItem;
  const { clearCartItems, addItemToCart, removeItemFromCart } = useContext(CartContext)

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <button className="arrow ghost-button" onClick={() => removeItemFromCart(id)}>
          &#10094;
        </button>
        <span className="value">{quantity}</span>
        <button className="arrow ghost-button" onClick={() => addItemToCart(cartItem)}>
          &#10095;
        </button>
      </span>
      <span className="price"> {price}</span>
      <button className="remove-button ghost-button" onClick={() => clearCartItems(id)}>
        &#10005;
      </button>
    </div>
  )
}

export default CheckoutItem;