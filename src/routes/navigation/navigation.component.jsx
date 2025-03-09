import {useContext, useState} from "react";
import {Link, Outlet} from "react-router-dom";

import {UserContext} from "../../context/user.context.jsx";
import logo from "../../assets/crown.svg";
import './navigation.styles.scss'
import {signOutUser} from "../../utils/firebase/firebase.utils.js";
import CartIcon from "../../components/cart-icon/cart-icon.component.jsx";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component.jsx";
import {CartContext} from "../../context/cart.context.jsx";

const Navigation = () => {
  const { user } = useContext(UserContext);
  const { isCartDropdownOpen } = useContext(CartContext);

  const signOut = async () => {
    await signOutUser()
  }

  return (
    <>
      <header className="navigation">
        <Link to="/" className="logo-container">
          <img className="logo" src={logo} alt="logo" />
        </Link>

        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            SHOP
          </Link>
          {
            user ? (
              <button className="nav-link" onClick={signOut} tabIndex="0">
                SIGN OUT
              </button>
            ) : (
              <Link to="/auth" className="nav-link">
                SIGN IN
              </Link>
            )
          }
          <CartIcon />
        </div>
        {isCartDropdownOpen && <CartDropdown />}
      </header>
      <Outlet/>
    </>
  )
}
export default Navigation;
