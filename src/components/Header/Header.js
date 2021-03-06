import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './header.scss';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import CartIcon from '../../components/CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';

const Header = ({ currentUser, hidden }) => (
	<header className="header">
		<Link to="/" className="logo-container">
			<Logo className="logo" />
		</Link>
		<div className="options">
			<Link to="/shop" className="option">
				SHOP
			</Link>
			<Link to="/contact" className="option">
				CONTACT
			</Link>
			{currentUser ? (
				<div className="option" onClick={() => auth.signOut()}>
					SIGN OUT
				</div>
			) : (
				<Link to="/signin" className="option">
					SIGN IN
				</Link>
			)}
			<CartIcon />
		</div>
		{!hidden && <CartDropdown />}
	</header>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
	currentUser,
	hidden,
});

export default connect(mapStateToProps)(Header);
