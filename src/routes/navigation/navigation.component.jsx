import {Link, Outlet} from "react-router-dom";

import logo from "../../assets/crown.svg";
import './navigation.styles.scss'

const Navigation = () => {
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
          <Link to="/auth" className="nav-link">
            SIGN IN
          </Link>
        </div>
      </header>
      <Outlet/>
    </>
  )
}
export default Navigation;
