import {useContext} from "react";
import {Outlet} from "react-router-dom";

import {UserContext} from "../../context/user.context.jsx";
import logo from "../../assets/crown.svg";
import {signOutUser} from "../../utils/firebase/firebase.utils.js";
import CartIcon from "../../components/cart-icon/cart-icon.component.jsx";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component.jsx";
import {CartContext} from "../../context/cart.context.jsx";
import {NavigationContainer, LogoContainer, NavLinks, NavLink, NavButton} from './navigation.styles.jsx'

const Navigation = () => {
  const { user } = useContext(UserContext);
  const { isCartDropdownOpen } = useContext(CartContext);

  const signOut = async () => {
    await signOutUser()
  }

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <img className="logo" src={logo} alt="logo" />
        </LogoContainer>

        <NavLinks>
          <NavLink to="/shop">
            SHOP
          </NavLink>
          {
            user ? (
              <NavButton as="button" className="nav-link ghost-button" onClick={signOut} tabIndex="0">
                SIGN OUT
              </NavButton>
            ) : (
              <NavLink to="/auth">
                SIGN IN
              </NavLink>
            )
          }
          <CartIcon />
        </NavLinks>
        {isCartDropdownOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet/>
    </>
  )
}
export default Navigation;
