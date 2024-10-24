import {useContext} from "react";
import {Link, Outlet} from "react-router-dom";

import {UserContext} from "../../context/user.context.jsx";
import logo from "../../assets/crown.svg";
import './navigation.styles.scss'
import {signOutUser} from "../../utils/firebase/firebase.utils.js";

const Navigation = () => {
  const { user, setUser } = useContext(UserContext);

  const signOut = async () => {
    await signOutUser()
    setUser(null)
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
              <span className="nav-link" onClick={signOut} role="link" tabIndex="0">
                SIGN OUT
              </span>
            ) : (
              <Link to="/auth" className="nav-link">
                SIGN IN
              </Link>
            )
          }
        </div>
      </header>
      <Outlet/>
    </>
  )
}
export default Navigation;
