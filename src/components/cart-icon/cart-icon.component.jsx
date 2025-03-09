import shoppingBag from "../../assets/shopping-bag.svg";
import './cart-icon.styles.scss';

const CartIcon = () => {
  return (
    <div className="cart-icon-container">
      <img className="shopping-icon" src={shoppingBag} alt="shopping bag" />

      <span className='item-count'>0</span>
    </div>
  )
}

export const CartIcon